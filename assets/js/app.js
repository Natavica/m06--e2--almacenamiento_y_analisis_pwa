document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Comprobar si hay un valor guardado en localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Aplicar el modo oscuro si estaba activado previamente
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Escuchar cambios en el interruptor
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    });
});


// Abrir (o crear) la base de datos
const request = indexedDB.open('HospitalDB', 1);

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    // Crear un almacén de objetos (tabla) para las citas
    const objectStore = db.createObjectStore('citas', { keyPath: 'id', autoIncrement: true });
    // Definir índices si es necesario
    objectStore.createIndex('paciente', 'paciente', { unique: false });
    objectStore.createIndex('fecha', 'fecha', { unique: false });
};

request.onsuccess = (event) => {
    const db = event.target.result;
    // Aquí puedes añadir funciones para interactuar con la base de datos
};

request.onerror = (event) => {
    console.error('Error al abrir la base de datos', event.target.errorCode);
};

function agregarCita(cita) {
    const dbTransaction = db.transaction(['citas'], 'readwrite');
    const objectStore = dbTransaction.objectStore('citas');
    const request = objectStore.add(cita);

    request.onsuccess = () => {
        console.log('Cita agregada con éxito');
    };

    request.onerror = (event) => {
        console.error('Error al agregar la cita', event.target.errorCode);
    };
}

// Ejemplo de uso:
const nuevaCita = { paciente: 'Juan Pérez', fecha: '2025-04-15', motivo: 'Consulta general' };
agregarCita(nuevaCita);


const CACHE_NAME = 'hospital-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/css/main.css',
    '/assets/js/script.js',
    // Agrega aquí otros recursos que deseas cachear
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Interceptar solicitudes y servir desde la caché
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
