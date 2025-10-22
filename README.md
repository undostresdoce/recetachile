# 🍲 Plataforma de Recetas Chilenas con Vue Router

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una **plataforma web de recetas** que permite a los usuarios navegar entre distintas secciones de forma fluida, sin recargar la página.
La navegación y el enrutamiento se gestionan mediante **Vue Router**, incluyendo rutas dinámicas y anidadas para recetas, categorías y autores.

La actividad se basa en los siguientes conceptos fundamentales:
  - Ruteo dinámico y anidado con **Vue Router**
  - Navegación declarativa con **router-link**
  - Uso de **props** en rutas dinámicas y transiciones animadas entre vistas

## Características
  - Navegación entre vistas sin recargar la página.
  - Rutas dinámicas para visualizar recetas por **ID** y perfiles de autores por **nombre**.
  - Rutas anidadas dentro de categorías, mostrando recetas filtradas por tipo.
  - Redirección automática desde `/inicio` hacia `/`.
  - Transiciones animadas entre las vistas para una experiencia fluida.
  - Implementación modular con componentes reutilizables (`Navbar`, `Inicio`, `Categorias`, `DetalleReceta`, `PerfilAutor`).

---

## Requerimientos Cumplidos
El proyecto cumple con los siguientes puntos solicitados:
  - **Configuración de Vue Router**: Aplicación creada con Vue CLI con sistema de rutas configurado.
  - **Definición de rutas principales**:
    - `/` → `Inicio.vue`
    - `/categorias` → `Categorias.vue`
    - `/receta/:id` → `DetalleReceta.vue` *(ruta dinámica)*
    - `/autor/:nombre` → `PerfilAutor.vue` *(ruta dinámica con props)*
    - `/inicio` → redirige a `/` *(alias/redirección)*
  - **Componente de navegación**: `Navbar.vue` con enlaces declarativos (`<router-link>`).
  - **Rutas anidadas**: Subrutas dentro de `/categorias` (ejemplo: `/categorias/postres`, `/categorias/bebidas`).
  - **Uso de props**: Paso de datos dinámicos en la ruta `/receta/:id`.
  - **Transiciones animadas**: Implementadas con `<transition>` para un cambio visual suave entre vistas.

---

## Tecnologías Utilizadas
  - **Vue.js (Vue CLI)**: Framework principal para la aplicación.
  - **Vue Router**: Gestión de rutas y navegación.
  - **JavaScript (ES6+)**: Lógica del enrutamiento y manejo de props.
  - **HTML5 / CSS3**: Estructura y estilos base.
  - **Transiciones CSS**: Animaciones suaves al cambiar de rutas.

---

## Estructura de componentes del proyecto

```pgsql

src/
├── components/
│   ├── Navbar.vue
│   ├── CategoriaPostres.vue
│   ├── CategoriaBebidas.vue
│   └── CategoriaPlatos.vue
│
├── views/
│   ├── Inicio.vue
│   ├── Categorias.vue
│   ├── DetalleReceta.vue
│   └── PerfilAutor.vue
│
├── router/
│   └── index.js
│
├── App.vue
└── main.js

```

---

## Instalación y Uso
Sigue estos pasos para ejecutar el proyecto localmente:
1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/undostresdoce/recetachile.git]
    cd [recetachile]
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecutar el proyecto:**
    ```bash
    npm run serve
    ```
4.  **Ver en el navegador:**
    - Abre http://localhost:8080/
    - Navega entre las secciones para visualizar las rutas dinámicas y transiciones animadas

---    

## 👥 Autores
Proyecto desarrollado por **Camila Collado** y **Daniel Paredes**.
