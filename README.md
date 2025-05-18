# Coctelería Kris

## Justificación y motivación del proyecto

El proyecto "Coctelería Kris" nace de la necesidad de digitalizar y optimizar la gestión de una coctelería, facilitando la consulta de recetas, la gestión de ingredientes y la creación de nuevas bebidas. El objetivo principal es ofrecer una herramienta intuitiva y moderna tanto para profesionales como para aficionados, mejorando la experiencia del usuario y promoviendo la creatividad en la elaboración de cócteles.

## Esquema de arquitectura

El proyecto está desarrollado utilizando Angular, un framework moderno para aplicaciones web. La arquitectura se basa en una organización modular y reutilizable de código, facilitando el mantenimiento y la escalabilidad.

```
┌─────────────┐
│  Módulos    │
└─────────────┘
      │
      ▼
┌─────────────┐      ┌─────────────┐
│ Componentes │ <--> │  Servicios  │
└─────────────┘      └─────────────┘
```

- **Módulos:** Agrupan componentes, servicios y otros recursos relacionados, permitiendo una estructura organizada y escalable.
- **Componentes:** Son las unidades básicas de la interfaz de usuario; cada componente representa una parte visual y funcional de la aplicación (por ejemplo: `main.component`, `recipe-list.component`, `recipe-detail.component`).
- **Servicios:** Gestionan la lógica de negocio y el acceso a datos, proporcionando funcionalidades reutilizables e independientes de la interfaz.

## Explicación detallada del código desarrollado (Angular)

- **Módulos:**
  - El proyecto está dividido en módulos para separar funcionalidades (por ejemplo, un módulo para recetas, otro para usuarios, etc.).
  - Cada módulo puede importar y exportar componentes, servicios y otros módulos.

- **Componentes:**
  - Se encargan de mostrar la información al usuario y gestionar la interacción.
  - Utilizan SCSS para la estilización y mejora visual.
  - Se comunican entre sí mediante propiedades y eventos.

- **Servicios:**
  - Proveen métodos para acceder, modificar y gestionar los datos (ej: `RecipeService`, `IngredientService`).
  - Permiten compartir lógica y datos entre diferentes componentes.

## Rutas de la aplicación

La aplicación utiliza el sistema de rutas de Angular para gestionar la navegación entre páginas. A continuación se describen las rutas principales:

- `/` o `/login`: Página de inicio de sesión (LoginComponent). Permite a los usuarios autenticarse en la aplicación.
- `/register`: Página de registro (RegisterComponent). Permite crear una nueva cuenta de usuario.
- `/drinks`: Página principal de la gestión de cócteles (DrinkHomePageComponent), protegida por autenticación. Aquí se muestran los cócteles disponibles y se puede buscar o filtrar.


**Estructura de rutas:**


- Las rutas `/login` y `/register` utilizan un layout de autenticación.
- Las rutas bajo `/drinks` utilizan un layout principal y requieren autenticación (`authGuard`).


## Puesta en producción

El proyecto está preparado para ser desplegado en entornos de producción, tanto en alojamientos gratuitos (como Netlify, Vercel, Firebase Hosting) como de pago. Se ha verificado su funcionalidad en entorno productivo, asegurando una experiencia de usuario óptima.

---

