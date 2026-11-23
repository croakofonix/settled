// Offline cache for Settled. Bump VERSION to ship an update.
const VERSION = "settled-8ee11cf50b";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./lib/pdf.min.js", "./lib/pdf.worker.min.js", "./fonts/fraunces-latin-full-normal.woff2", "./fonts/fraunces-latin-wght-italic.woff2", "./fonts/inter-latin-wght-normal.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (req.mode === "navigate") {
    // network first so updates arrive when online; cached copy when offline (e.g. on a plane)
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put("./index.html", copy)); return r; }).catch(() => caches.match("./index.html")));
    return;
  }
  // fonts and static files: cache first, fill cache on first use
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok || r.type === "opaque") { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return r; })));
});
