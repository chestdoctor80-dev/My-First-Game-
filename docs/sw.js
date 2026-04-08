// sw.js

const CACHE_NAME = "quiz-cache-v1";
const FILES_TO_CACHE = [
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icon.png"
];

// عند التثبيت: تخزين الملفات الأساسية في الكاش
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// عند التفعيل: حذف أي كاش قديم
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// عند الطلب: محاولة جلب الملف من الكاش أولاً ثم من الشبكة
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
navigator.serviceWorker.register("sw.js");
