const CACHE = "tomten-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.svg",
  "./icon-512.svg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
      .catch(() => {})
  );
});

self.addEventListener("fetch", (e) => {
  // Only cache GET requests
  if (e.request.method !== "GET") {
    return;
  }

  e.respondWith(
    caches.match(e.request)
      .then((cached) => {
        if (cached) return cached;
        return fetch(e.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200) {
              return response;
            }
            // Clone the response
            const cloned = response.clone();
            caches.open(CACHE)
              .then((c) => c.put(e.request, cloned))
              .catch(() => {});
            return response;
          })
          .catch(() => {
            // Offline fallback
            return caches.match("./index.html");
          });
      })
      .catch(() => {
        return caches.match("./index.html");
      })
  );
});
