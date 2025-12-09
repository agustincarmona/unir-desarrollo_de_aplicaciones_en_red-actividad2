/**
 * @name app.constants
 * @description Constantes y configuración de la aplicación
 * 
 * Buenas prácticas aplicadas:
 * - Uso de .constant() para valores inmutables
 * - Centralización de datos de configuración
 * - Separación de datos estáticos de la lógica
 */
(function() {
    'use strict';

    angular
        .module('tutorialApp')
        .constant('MENU_ITEMS', [
            { id: 'intro', title: 'Introducción', icon: '🏠' },
            { id: 'justificacion', title: 'Justificación', icon: '📋' },
            { id: 'instalacion', title: 'Instalación', icon: '⚙️' },
            { id: 'primeros-pasos', title: 'Primeros Pasos', icon: '🚀' },
            { id: 'utilizacion', title: 'Utilización', icon: '💻' },
            { id: 'funcionamiento', title: 'Funcionamiento', icon: '🔧' },
            { id: 'conclusiones', title: 'Conclusiones', icon: '🎯' }
        ])
        .constant('LOGROS', [
            {
                icon: '📖',
                titulo: 'Fundamentos',
                descripcion: 'Comprendimos qué es AngularJS y para qué sirve'
            },
            {
                icon: '⚙️',
                titulo: 'Instalación',
                descripcion: 'Aprendimos las diferentes formas de instalar el framework'
            },
            {
                icon: '🎮',
                titulo: 'Práctica',
                descripcion: 'Creamos aplicaciones interactivas con data binding'
            },
            {
                icon: '🧩',
                titulo: 'Directivas',
                descripcion: 'Conocimos las directivas más importantes de AngularJS'
            },
            {
                icon: '🏗️',
                titulo: 'Arquitectura',
                descripcion: 'Entendimos cómo estructurar aplicaciones con el patrón MVC'
            }
        ])
        .constant('OBJETIVOS', [
            'Entender qué es AngularJS y su propósito',
            'Conocer los prerrequisitos y tecnologías relacionadas',
            'Instalar y configurar el framework correctamente',
            'Crear una aplicación "Hola Mundo"',
            'Utilizar las directivas principales',
            'Comprender el data binding bidireccional',
            'Estructurar una aplicación con controladores',
            'Visualizar y ejecutar aplicaciones AngularJS'
        ])
        .constant('CODE_SNIPPETS', {
            cdn: '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js"></script>',
            npm: 'npm init -y\nnpm install angular@1.8.3\nnpm install --save-dev http-server'
        });

})();

