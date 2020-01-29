const CACHE = "application-cache";

self.addEventListener("install", event => {
	event.waitUntil(caches.open(CACHE).then(cache => cache.addAll([ "/", "/index.html", "/manifest.json", "/src/IodineGBA/launcher.html" ])));
})

self.addEventListener("fetch", event => {
	if(location.port !== "") return;
	if(event.request.method === "GET") {
		event.respondWith(fromCache(event.request));
		event.waitUntil(update(event.request));
	}
});

async function fromCache(request) {
    const cache = await caches.open(CACHE);
    const match = await cache.match(request);
    return match || fetch(request);
}

async function update(request) {
    const cache = await caches.open(CACHE);
    const response = await fetch(request);
    return cache.put(request, response);
}
