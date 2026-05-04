const CACHE_NAME = 'huarmey-v1';
const ASSETS = [
  './',
  './tu_archivo.html', // Cambia esto al nombre real de tu archivo
  './ICONO HUARMEY.png',
  'https://unpkg.com/dexie@3.2.0/dist/dexie.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
