const CACHE = 'credimach-v8';
const FILES = ['./','./index.html','./manifest.json','./credimach_logo_transparent.png'];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request).catch(()=>caches.match('./index.html'))));
});
