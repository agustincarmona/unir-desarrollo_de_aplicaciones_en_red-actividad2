# Tutorial AngularJS - UNIR Actividad 2

Tutorial interactivo y navegable sobre AngularJS, construido utilizando el propio framework como demostración práctica y siguiendo las **buenas prácticas** de desarrollo.

## 📋 Descripción

Este proyecto es un tutorial completo sobre AngularJS que cubre:

- **Justificación del Framework**: Qué es, para qué sirve, aplicaciones, lenguajes y prerrequisitos
- **Instalación**: Métodos de instalación (CDN, NPM), estructura de carpetas, versiones
- **Primeros Pasos**: Creación de una aplicación "Hola Mundo"
- **Utilización**: Directivas principales, ejemplos interactivos
- **Funcionamiento**: Arquitectura, edición de ficheros, ciclo de vida
- **Conclusiones**: Alcance, objetivos conseguidos, ventajas/desventajas

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 14+ (opcional, solo para el servidor de desarrollo)
- Navegador web moderno

### Instalación

1. Clona o descarga este repositorio
2. Navega al directorio del proyecto
3. Instala las dependencias (opcional):

```bash
npm install
```

### Ejecución

**Opción 1: Con npm (recomendado)**

```bash
npm start
```

Esto iniciará un servidor en `http://localhost:8080` y abrirá el navegador automáticamente.

**Opción 2: Abrir directamente**

Abre el archivo `src/index.html` en tu navegador.

## 📁 Estructura del Proyecto (Buenas Prácticas)

```
├── src/
│   ├── index.html              # Página principal
│   ├── styles.css              # Estilos CSS
│   └── app/
│       ├── app.module.js       # Módulo principal
│       ├── app.constants.js    # Constantes y configuración
│       ├── controllers/
│       │   ├── main.controller.js    # Controlador principal
│       │   ├── demo.controller.js    # Controlador demo Hola Mundo
│       │   └── todo.controller.js    # Controlador lista de tareas
│       ├── services/
│       │   ├── navigation.service.js # Servicio de navegación
│       │   └── clipboard.service.js  # Servicio de portapapeles
│       ├── directives/
│       │   └── highlight-on-hover.directive.js
│       └── filters/
│           └── capitalizar.filter.js
├── package.json
└── README.md
```

## ✨ Buenas Prácticas Aplicadas

Este proyecto demuestra las buenas prácticas recomendadas para AngularJS:

### 1. **IIFE (Immediately Invoked Function Expression)**
```javascript
(function() {
    'use strict';
    // código aquí
})();
```
Evita contaminar el scope global.

### 2. **Sintaxis controllerAs**
```html
<div ng-controller="MainController as vm">
    {{ vm.propiedad }}
</div>
```
Más claro que usar `$scope` directamente.

### 3. **Un archivo por componente**
- Cada controlador, servicio, directiva y filtro en su propio archivo
- Nombrado descriptivo: `nombre.tipo.js`

### 4. **Inyección de dependencias segura**
```javascript
MainController.$inject = ['NavigationService', 'ClipboardService'];
```
Funciona correctamente después de minificación.

### 5. **Bindable Members al inicio**
```javascript
function MainController() {
    var vm = this;
    
    // Propiedades públicas
    vm.propiedad = valor;
    vm.metodo = metodo;
    
    // Implementación después
    function metodo() { }
}
```

### 6. **Servicios para lógica compartida**
- `NavigationService`: Maneja estado de navegación
- `ClipboardService`: Operaciones de portapapeles

### 7. **Constantes para datos estáticos**
```javascript
angular.module('app')
    .constant('MENU_ITEMS', [...])
    .constant('CONFIG', {...});
```

## 🛠️ Tecnologías Utilizadas

- **AngularJS 1.8.3** - Framework JavaScript principal
- **HTML5** - Estructura y plantillas
- **CSS3** - Estilos y animaciones
- **Google Fonts** - Tipografías (JetBrains Mono, Playfair Display, Source Sans Pro)

## 📖 Contenido del Tutorial

### 1. Introducción
Bienvenida al tutorial con información general sobre AngularJS.

### 2. Justificación
- ¿Qué es AngularJS?
- ¿Para qué sirve?
- Aplicaciones comunes
- Tecnologías base (JavaScript, HTML, CSS)
- Prerrequisitos de conocimiento

### 3. Instalación
- Método CDN (más sencillo)
- Método NPM (recomendado para proyectos)
- Estructura de carpetas siguiendo buenas prácticas
- Versiones necesarias
- Variables de entorno
- Requisitos de base de datos

### 4. Primeros Pasos
- Creación de "Hola Mundo" paso a paso
- Demo interactiva de data binding
- Cómo visualizar resultados

### 5. Utilización
- Estructura de una aplicación AngularJS
- Directivas principales (ng-app, ng-controller, ng-model, ng-repeat, etc.)
- Ejemplo interactivo: Lista de Tareas

### 6. Funcionamiento
- Alcance del framework (páginas, secciones, componentes)
- Edición de ficheros HTML y JavaScript
- Referencias entre ficheros y orden de carga
- Ciclo de vida de AngularJS

### 7. Conclusiones
- Logros del tutorial
- Objetivos conseguidos
- Ventajas y desventajas
- Próximos pasos

## ✨ Características Destacadas

- **Navegación interactiva**: Sidebar con acceso rápido a todas las secciones
- **Progreso visual**: Barra de progreso que muestra el avance
- **Demos en vivo**: Ejemplos que puedes probar directamente
- **Diseño responsivo**: Adaptado para móviles y escritorio
- **Código bien estructurado**: Siguiendo las mejores prácticas de AngularJS

## 📚 Referencias

- [Guía de Estilo de John Papa para AngularJS](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
- [Documentación oficial de AngularJS](https://docs.angularjs.org/guide)

## 👨‍🎓 Información Académica

- **Universidad**: UNIR
- **Asignatura**: Desarrollo de aplicaciones en red
- **Actividad**: 2 - Tutorial de una tecnología o framework
- **Framework asignado**: AngularJS

## 📝 Licencia

MIT License - Ver archivo LICENSE para más detalles.
