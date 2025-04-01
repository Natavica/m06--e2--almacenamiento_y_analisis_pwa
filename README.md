
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

```

---

