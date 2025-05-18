# Coctelería Kris

![enter image description here](https://raw.githubusercontent.com/XanderL2/Cocktail-Making-Kris/refs/heads/main/docs/main.png)
## Justificación y motivación del proyecto

El proyecto "Coctelería Kris" nace de la necesidad de digitalizar y optimizar la gestión de una coctelería, facilitando la consulta de recetas, la gestión de ingredientes y la creación de nuevas bebidas. El objetivo principal es ofrecer una herramienta intuitiva y moderna tanto para profesionales como para aficionados, mejorando la experiencia del usuario y promoviendo la creatividad en la elaboración de cócteles.

## Esquema de arquitectura

La arquitectura del proyecto se divide en dos partes principales:

- **Frontend (Angular):**
  - Desarrollado con Angular, que utiliza principios de Programación Orientada a Objetos (POO) para la organización de componentes, servicios y módulos. Esto facilita la reutilización de código, el mantenimiento y la escalabilidad de la aplicación.
  - Estructura modular basada en componentes, servicios y módulos.

- **Backend:**
  - Implementado siguiendo el patrón Modelo-Vista-Controlador (MVC), lo que permite separar la lógica de negocio, la gestión de datos y la presentación, asegurando un desarrollo más limpio y mantenible.

```text
Frontend (Angular, POO)
┌─────────────┐
│  Módulos    │
└─────────────┘
      │
      ▼
┌─────────────┐      ┌─────────────┐
│ Componentes │ <--> │  Servicios  │
└─────────────┘      └─────────────┘

Backend (MVC)
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   Modelo    │ <--> │ Controlador │ <--> │   Vista     │
└─────────────┘      └─────────────┘      └─────────────┘
```

Esta separación permite una gestión eficiente tanto del frontend como del backend, aprovechando las ventajas de Angular y de la arquitectura MVC en el servidor.## Explicación detallada del código desarrollado (Angular)

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


## Responsive:
![enter image description here](https://raw.githubusercontent.com/XanderL2/Cocktail-Making-Kris/refs/heads/main/docs/responsive.png)


## Puesta en producción

El proyecto está desplegado en GitHub Pages (gh-pages), lo que permite acceder a la aplicación de forma pública y gratuita desde cualquier dispositivo. Puedes ver la aplicación funcionando en:

[https://xanderl2.github.io/Cocktail-Making-Kris/](https://xanderl2.github.io/Cocktail-Making-Kris/)

## Accesibilidad

La aplicación ha sido revisada en cuanto a accesibilidad utilizando la herramienta WAVE. El análisis muestra que existen muy pocos problemas críticos y ningún error de contraste, lo que garantiza una experiencia más inclusiva para todos los usuarios. Seguimos atentos a mejorar la accesibilidad en futuras versiones.

![enter image description here](https://raw.githubusercontent.com/XanderL2/Cocktail-Making-Kris/refs/heads/main/docs/main.png)
