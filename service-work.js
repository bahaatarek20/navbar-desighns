self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("navbar-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./logo.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});