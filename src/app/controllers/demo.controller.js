/**
 * @name DemoController
 * @description Controlador para la demo de Hola Mundo
 * 
 * Buenas prácticas aplicadas:
 * - Controlador pequeño y enfocado en una sola tarea
 * - Sintaxis controllerAs
 * - Sin lógica compleja (solo manejo de estado simple)
 */
(function() {
    'use strict';

    angular
        .module('tutorialApp')
        .controller('DemoController', DemoController);

    // Sin dependencias necesarias para este controlador simple
    DemoController.$inject = [];

    function DemoController() {
        /* jshint validthis: true */
        var vm = this;

        // ============================================
        // Bindable Members
        // ============================================
        vm.nombre = '';

        // ============================================
        // Activación
        // ============================================
        activate();

        function activate() {
            // Controlador activado
            // En un caso real, aquí se podrían cargar datos del servidor
        }
    }

})();

