// Función para validar nombre
function validarNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre) && nombre.trim() !== "";
}

// Función para validar correo
function validarCorreo(correo) {
    if (!correo.includes("@")) {
        return false;
    }
    return true;
}

// Función para validar teléfono
function validarTelefono(telefono) {
    const regex = /^\d{7,15}$/;
    return regex.test(telefono);
}

function pedirDato(mensaje, funcionValidar) {
    let dato;
    do {
        dato = prompt(mensaje); // Pedir el dato al usuario
        if (dato === null) { 
            // Si el usuario presiona "Cancelar", salimos de la función
            alert("Operación cancelada por el usuario.");
            return null; // Retornamos null para indicar que se canceló
        }
        if (!funcionValidar(dato)) {
            alert("El dato ingresado no es válido. Por favor, inténtalo de nuevo.");
        }
    } while (!funcionValidar(dato));
    return dato; // Retornar el dato válido
}


// Función para reservar una hora
function reservarHora() {
    try {
        // Pedir los datos al usuario
        const nombre = pedirDato("Por favor, ingresa tu nombre:", validarNombre);
        if (nombre === null) return; // Si se canceló, salimos de la función

        const correo = pedirDato("Por favor, ingresa tu correo electrónico:", validarCorreo);
        if (correo === null) return; // Si se canceló, salimos de la función

        const telefono = pedirDato("Por favor, ingresa tu número de teléfono:", validarTelefono);
        if (telefono === null) return; // Si se canceló, salimos de la función

        // Mostrar los datos si todo es válido
        console.log("Nombre válido:", nombre);
        console.log("Correo válido:", correo);
        console.log("Teléfono válido:", telefono);

        // Crear un objeto con los datos de la cita
        const cita = {
            paciente: nombre,
            correo: correo,
            telefono: telefono,
            doctor: "Dra. García",  // Este valor podría ser dinámico también
            fecha: "2025-04-01",   // Puedes cambiar esto para que se ingrese desde el formulario también
            hora: "10:00 AM"       // Este valor también podría ser dinámico
        };

        // Llamar a la función para guardar la cita en la base de datos
        agregarCita(cita);

        // Informar al usuario que la cita se ha registrado
        alert(`Cita reservada correctamente.\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}`);

    } catch (error) {
        console.error("Error al manejar la reserva:", error);
        alert("Ocurrió un problema al procesar la reserva.");
    }
}

// Asignar el evento al botón de reserva
const botonReserva = document.getElementById("reserva");
botonReserva.addEventListener("click", reservarHora);


function agregarCita(cita) {
    if (!db) {
        console.error("❌ La base de datos no está lista aún.");
        return;
    }

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
