# Portfolio personal | Joshua Sanchez Mc Leish

Portfolio de **Backend Developer Junior (Java + Spring Boot)**. Presenta mi formación, experiencia, proyectos reales con demo y repositorio, y los servicios que ofrezco como freelance.

🔗 **Sitio en vivo:** https://joshua-smc.netlify.app/

---

## Qué muestra

- **Hero** con ilustración SVG propia (planeta, anillos y resplandor) y acceso directo al CV.
- **Sobre mí y habilidades** agrupadas por área: Backend, DevOps & Cloud, Frontend y en curso.
- **Experiencia y formación**, incluyendo el programa Certified Tech Developer (Digital House, Globant y Mercado Libre).
- **Proyectos destacados** con carrusel de capturas, stack, demo y repositorios:
  - Stellar Jets: plataforma full stack de reservas de vuelos.
  - Dental Clinic Management System: gestión de pacientes, turnos y roles (RBAC).
  - Backend Infrastructure & DevOps: API en producción con Docker, Terraform, GitHub Actions, Prometheus y Grafana.
- **Servicios y proceso de trabajo** orientados a clientes freelance.
- **Contacto** por mail, WhatsApp, LinkedIn y GitHub.

## Tecnologías

| Tecnología | Uso |
|---|---|
| React 19 | Interfaz, un componente por sección |
| Vite 7 | Entorno de desarrollo y build |
| Tailwind CSS 4 | Estilos, con paleta de marca definida en `@theme` |
| Framer Motion | Animaciones de entrada y parallax |
| Lucide React | Íconos |
| ESLint | Linting con reglas de React y hooks |

## Estructura

```
src/
├── components/     Una sección por archivo (Hero, About, Projects, ...)
├── lib/            Utilidades compartidas (color.js)
├── assets/         Imágenes optimizadas y CV
├── index.css       Tailwind, tokens de color y estilos globales
├── JoshuaApp.jsx   Composición de las secciones
└── main.jsx        Punto de entrada
public/
└── robots.txt
```

## Decisiones de diseño

- **Paleta:** fondo negro con dos acentos, dorado (Hero, Proyectos, Contacto) y azul (Formación). Los tonos viven en `src/index.css` bajo `@theme`; cambiarlos ahí actualiza todo el sitio.
- **Rendimiento:** capturas de proyectos comprimidas, imágenes con dimensiones explícitas y carga diferida. Lighthouse sobre el build de producción (móvil, 4G lenta): 99 rendimiento, 100 accesibilidad, 100 buenas prácticas, 100 SEO.
- **Tipografía:** fuentes del sistema, sin cargar fuentes externas.

## Ejecución local

```bash
git clone https://github.com/JoshuaSMC/joshua-smc-pagina-personal-react.git
cd joshua-smc-pagina-personal-react
npm install
npm run dev
```

Otros comandos:

```bash
npm run build     # build de producción en dist/
npm run preview   # sirve el build (usar este para medir rendimiento)
npm run lint      # ESLint
```

## Contacto

**Joshua Sanchez Mc Leish**, Backend Developer Junior | Java + Spring Boot
Córdoba, Argentina · disponible para trabajo remoto

- LinkedIn: https://linkedin.com/in/joshua-sanchez-mc-leish-746142399
- GitHub: https://github.com/JoshuaSMC
- Email: joshuasmcleish@gmail.com
