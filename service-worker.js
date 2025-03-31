

const STATIC_CACHE = "hospital-v1";

const APP_SHELL = [
'/',  
  '/index.html', 
  '/equipo.html', 
  '/contacto.html', 
  '/assets/scss/main.css', 
  '/assets/js/navbar.js', 
  '/assets/js/promp.js', 
  '/assets/js/script.js', 
  '/assets/images/hospital.jpeg', //
  '/assets/images/logo--swh.png', 
  '/assets/images/profesional--c3po.png', 
  '/assets/images/profesional--vader.png', 
  '/assets/images/profesional--chewie.png', 
  '/assets/images/profesional--yoda.png' 
];

// self.addEventListener("install", (e) => {
//   const cacheStatic = caches
//     .open(STATIC_CACHE)
//     .then((cache) => cache.addAll(APP_SHELL));

//   e.waitUntil(cacheStatic);
// });

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch((err) => {
        console.error('Error al agregar archivos al caché:', err);
      })
  );
});


self.addEventListener("fetch", (e) => {
  console.log("fetch! ", e.request);

  // Intentamos servir primero desde el caché (estrategia Cache-First)
  e.respondWith(
    caches
      .match(e.request)
      .then((cachedResponse) => {
        // Si el recurso está en caché, devolverlo
        if (cachedResponse) {
          console.log("Servido desde caché:", e.request.url);
          return cachedResponse;
        }

        // Si no está en caché, hacer la solicitud a la red (fallo en caché)
        return fetch(e.request).then((networkResponse) => {
          // Verifica si la respuesta es válida para cachearla
          if (networkResponse && networkResponse.ok) {
            // Clona la respuesta antes de usarla, para poder almacenarla en caché
            const clonedResponse = networkResponse.clone();

            // Abrir el caché y almacenar la respuesta
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(e.request, clonedResponse);
            });
          }

          // Retornar la respuesta de la red
          return networkResponse;
        }).catch(console.log);  // En caso de error, solo se registra
      })
      .catch(console.log)  // Si no se puede hacer match con el caché, registramos el error
  );
});

