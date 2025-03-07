self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("dashboard-cache").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/styles.css",
                "/script.js",
                "/icons/icon-192x192.png",
                "/icons/icon-512x512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return the cached response if found, otherwise fetch from network
            return cachedResponse || fetch(event.request).then((networkResponse) => {
                // Optional: You can cache the new response for future use
                if (event.request.url.startsWith(self.location.origin)) {
                    caches.open("dashboard-cache").then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                    });
                }
                return networkResponse;
            });
        })
    );
});
