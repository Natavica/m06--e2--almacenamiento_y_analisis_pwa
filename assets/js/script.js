// Datos de las personas para las cards
const personas = [
    {
        nombre: "Dr. Yoda Jedi",
        especialidad: "Otorrinolaringología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--yoda.png",
        experiencia: "3 años de experiencia"
    },
    {
        nombre: "Dr. César Tapia",
        especialidad: "Dermatología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--c3po.png",
        experiencia: "3 años de experiencia"
    },
    {
        nombre: "Dr. Chew Bacca",
        especialidad: "Cardiología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--chewie.png",
        experiencia: "5 años de experiencia"
    },
    {
        nombre: "Dr. Darth Vader",
        especialidad: "Cirujía General",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--vader.png",
        experiencia: "3 años de experiencia"
    }
];

// Filtrar los profesionales según una condición
function filtrarProfesionales(condicion) {
    return personas.filter(profesional => condicion(profesional));
}

// Mostrar profesionales
function mostrarProfesionales(profesionales) {
    console.log(profesionales);  // Verifica los datos de los profesionales
    const contenedor = document.querySelector(".cards__container--equipo");
   
    if (contenedor) {
        contenedor.innerHTML = "";
        profesionales.forEach(profesional => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${profesional.foto}" class="card__img" alt="Foto de ${profesional.nombre}">
                <ul>
                    <li class="card__text--nombre">${profesional.nombre}</li>
                    <li class="card__text--especialidad">${profesional.especialidad}</li>
                    <li class="card__text--resena">${profesional.resena}</li>
                </ul>
            `;

            contenedor.appendChild(card);
        });
    } else {
        console.log('No se encontró el contenedor');
    }
}


// Mostrar todos los profesionales al inicio
mostrarProfesionales(personas);

// Asociar eventos a los botones
document.getElementById("btn-cardiologos").addEventListener("click", () => {
    const cardiologos = filtrarProfesionales(profesional => profesional.especialidad === "Cardiología");
    mostrarProfesionales(cardiologos);
});

document.getElementById("btn-dermatologos").addEventListener("click", () => {
    const dermatologos = filtrarProfesionales(profesional => profesional.especialidad === "Dermatología");
    mostrarProfesionales(dermatologos);
});

document.getElementById("btn-todos").addEventListener("click", () => {
    mostrarProfesionales(personas); // Mostrar todos los profesionales
});

//Configurar SW
let swLocation = "service-worker.js";


if (navigator.serviceWorker) {
  if (window.location.href.includes("localhost")) swLocation = "/service-worker.js"; 
  navigator.serviceWorker.register(swLocation);
}

//Logic of web app
console.log("SW!");