
# Módulo 06: Taller 01
## Ejercicio Práctico: Implementación Inicial de PWA
en la Web del Hospital

### Descripción del Proyecto
*En este ejercicio práctico, los estudiantes deben configurar y utilizar opciones de
almacenamiento web dentro de la web del hospital convertida en PWA, utilizando
LocalStorage, SessionStorage o IndexedDB. Además, se ejecutarán pruebas con
Lighthouse para validar el rendimiento y estado de la PWA.*

---

### Cómo visualizar el proyecto en un navegador
*Clona o descarga este repositorio en tu máquina local.
Navega hasta el directorio del proyecto.
Abre el archivo index.html directamente en un navegador web. Puedes hacerlo de las siguientes maneras:
Haciendo doble clic sobre el archivo index.html.
Arrastrando y soltando el archivo en una ventana de tu navegador.
Abriendo el archivo desde la opción "Abrir archivo" en el menú de tu navegador.
El sitio web se renderizará en el navegador, donde podrás navegar por las diferentes vistas (Home, Equipo Médico, Contacto).*

**🛠 Pasos para ejecutar Lighthouse y evaluar la PWA**
**1️⃣ Abre tu aplicación en el navegador**

Asegúrate de que la aplicación esté corriendo en un servidor local (por ejemplo, con npm run dev o live server).

Si abriste el archivo index.html directamente sin un servidor, es posible que Lighthouse no detecte la PWA correctamente.

**2️⃣ Abre las herramientas de desarrollo (DevTools)**

En Google Chrome, presiona F12 o Ctrl + Shift + I (Windows/Linux) o Cmd + Option + I (Mac).

También puedes hacer clic derecho en la página y seleccionar "Inspeccionar".

**3️⃣ Ve a la pestaña "Lighthouse"**

En la parte superior de DevTools, busca la pestaña "Lighthouse".

Si no la ves, haz clic en el ícono >> para ver más opciones.

**4️⃣ Configura la auditoría**

En la sección "Categorías", marca solo "Progressive Web App (PWA)".

En la sección "Dispositivo", elige "Móvil" o "Escritorio".

Asegúrate de que la opción "Simular carga lenta y red móvil" esté activada (para una prueba más realista).

**5️⃣ Ejecuta la prueba**

Haz clic en "Generar informe" y espera unos segundos mientras Lighthouse analiza la aplicación.

---

**Pruebas de Funcionamiento Offline y Validación con Lighthouse**
Se verificó que la aplicación funcione en modo offline utilizando Lighthouse para evaluar
el rendimiento de la PWA:
- Se ejecutó Lighthouse para generar un informe que evalúe si la aplicación cumple
con los criterios de PWA (instalabilidad, funcionamiento offline y rendimiento).
- Asegúrate de que el informe refleje una implementación básica funcional de
PWA.

### Estructura de Carpetas y Archivos
```bash

/Estructura
│
├── /assets/
├── ├── /js/
│   │   └── script.js
│   │   └── navbar.js
│   │   └── prompt.js
│
│   └── /images/ 
│   ├── /scss/
│       └── /abstracts/  
│       └── /components/  
│       └── /core/
│       └── /layout/
│       └── /pages/
│       └── /themes/
│       └── /vendors/    
│       └── main.scss 
│       └── main.css.map
│       └── main.css
│ 
*
├── index.html              # Página principal (Home)
├── equipo.html             # Página del equipo médico
└── contacto.html           # Página de contacto
└── manifest.json           # Manifiesto
└── service-worker.js       # Service Worker
└── reporte-lighthouse.html # Reporte Lighthouse
```

---

1. Implementación de Almacenamiento Web 
- Configura un sistema de almacenamiento para la PWA del hospital usando
LocalStorage o SessionStorage:
- Almacena datos de usuario o información importante para que persista incluso
después de recargar la página.
- Asegúrate de que el almacenamiento se realice de manera eficiente y que los
datos almacenados puedan ser recuperados correctamente.
Tip: Considera almacenar preferencias del usuario, configuración de la
sesión, o cualquier dato que deba ser accesible en diferentes sesiones.

2. Implementación de IndexedDB 
-Se almacenan datos a modo de prueba, que se obtienen a través de un promp en "Agendar Cita"
se solicita nombre, correo y teléfono y se almacenan en indexedDB (hospital DB)


3. Despliegue y Configuración del Service Worker Personalizado 
Se perdonalizó un Service Worker que gestione los archivos de caché y
soporte el almacenamiento offline:
- El Service Worker funcione adecuadamente para manejar la
caché de los archivos y el almacenamiento en  IndexedDB.
- La PWA esté desplegada correctamente y sea accesible offline.

4. Pruebas de Rendimiento con Lighthouse 
- Ejecuta Lighthouse para validar el rendimiento de la PWA:
- Verifica que la aplicación sea instalable, funcione offline, y tenga un buen
rendimiento en términos de velocidad y accesibilidad.
- Revisa el informe de Lighthouse y mejora los aspectos recomendados por la
herramienta.


Se cumnplen con todos los items requeridos.