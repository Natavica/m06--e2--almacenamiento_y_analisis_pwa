document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Comprobar si hay un valor guardado en localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    // Aplicar el modo oscuro si estaba activado previamente
    if (isDarkMode) {
        body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    // Escuchar cambios en el interruptor
    darkModeToggle.addEventListener("change", () => {
        if (darkModeToggle.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "true");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "false");
        }
    });
});

// ---------------------------- IndexedDB ----------------------------
let db;

function openDatabase() {
    const request = indexedDB.open("hospitalDB", 1);

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains("citas")) {
            db.createObjectStore("citas", { keyPath: "id", autoIncrement: true });
        }
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        console.log("✅ Base de datos abierta exitosamente.");
    };

    request.onerror = function(event) {
        console.error("❌ Error al abrir la base de datos:", event.target.error);
    };
}

// Luego, en algún punto posterior del código, abre la base de datos.
openDatabase(); // Llama a la función para abrir la base de datos


// ---------------------------- Guardar y Verificar Citas ----------------------------
function agregarCita(cita) {
    if (!db) {
        console.error("❌ La base de datos no está lista aún.");
        return;
    }

    console.log("📩 Intentando guardar cita en IndexedDB:", cita);

    const transaction = db.transaction(["citas"], "readwrite");
    const citasStore = transaction.objectStore("citas");

    const request = citasStore.add(cita);

    request.onsuccess = function(event) {
        console.log("✅ Cita guardada en IndexedDB con ID:", event.target.result);
    };

    request.onerror = function(event) {
        console.error("❌ Error al guardar la cita:", event.target.error);
    };
}

function agregarCita(cita) {
    if (!db) {
        console.error("❌ La base de datos no está lista aún.");
        return;
    }

    // 🔹 Generar un ID único basado en la fecha/hora actual
    cita.id = new Date().getTime();

    console.log("📩 Intentando guardar cita en IndexedDB:", cita);

    const transaction = db.transaction(["citas"], "readwrite");
    const citasStore = transaction.objectStore("citas");

    const request = citasStore.add(cita);

    request.onsuccess = function(event) {
        console.log("✅ Cita guardada en IndexedDB con ID:", event.target.result);
    };

    request.onerror = function(event) {
        console.error("❌ Error al guardar la cita:", event.target.error);
    };
}

// Llamar a la verificación después de unos segundos
setTimeout(verificarCitas, 3000);


