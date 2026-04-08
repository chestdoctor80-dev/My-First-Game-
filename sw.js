// sw.js

// عند التثبيت: تخزين الملفات الأساسية في الكاش
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("quiz-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js",
        "manifest.json",
        "icon.png" // من الأفضل إضافة الأيقونة أيضًا
      ]);
    })
  );
});

// عند الطلب: محاولة جلب الملف من الكاش أولاً ثم من الشبكة
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
