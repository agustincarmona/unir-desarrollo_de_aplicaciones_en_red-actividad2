/**
 * @name MainController
 * @description Controlador principal de la aplicación
 * 
 * Buenas prácticas aplicadas:
 * - Sintaxis controllerAs (vm = ViewModel)
 * - Inyección de dependencias explícita con $inject
 * - Bindable Members al inicio para mejor legibilidad
 * - Lógica delegada a servicios
 * - IIFE para encapsulación
 */
(function() {
    'use strict';

    angular
        .module('tutorialApp')
        .controller('MainController', MainController);

    // Inyección de dependencias explícita (seguro para minificación)
    MainController.$inject = [
        'NavigationService', 
        'ClipboardService', 
        'MENU_ITEMS', 
        'LOGROS', 
        'OBJETIVOS'
    ];

    function MainController(NavigationService, ClipboardService, MENU_ITEMS, LOGROS, OBJETIVOS) {
        /* jshint validthis: true */
        var vm = this;

        // ============================================
        // Bindable Members (propiedades públicas)
        // ============================================
        vm.angularVersion = angular.version.full;
        vm.menuItems = MENU_ITEMS;
        vm.logros = LOGROS;
        vm.objetivos = OBJETIVOS;

        // Métodos públicos
        vm.getCurrentSection = getCurrentSection;
        vm.isSidebarCollapsed = isSidebarCollapsed;
        vm.toggleSidebar = toggleSidebar;
        vm.navigateTo = navigateTo;
        vm.getCurrentTitle = getCurrentTitle;
        vm.getProgress = getProgress;
        vm.copyCode = copyCode;

        // ============================================
        // Activación del controlador
        // ============================================
        activate();

        function activate() {
            // Inicialización del controlador
            // Aquí se pueden cargar datos iniciales si es necesario
        }

        // ============================================
        // Implementación de métodos
        // ============================================

        /**
         * Obtiene la sección actual del tutorial
         * @returns {string} ID de la sección actual
         */
        function getCurrentSection() {
            return NavigationService.getCurrentSection();
        }

        /**
         * Verifica si el sidebar está colapsado
         * @returns {boolean} Estado del sidebar
         */
        function isSidebarCollapsed() {
            return NavigationService.isSidebarCollapsed();
        }

        /**
         * Alterna el estado del sidebar (expandido/colapsado)
         */
        function toggleSidebar() {
            NavigationService.toggleSidebar();
        }

        /**
         * Navega a una sección específica del tutorial
         * @param {string} sectionId - ID de la sección destino
         */
        function navigateTo(sectionId) {
            NavigationService.navigateTo(sectionId);
        }

        /**
         * Obtiene el título de la sección actual
         * @returns {string} Título de la sección
         */
        function getCurrentTitle() {
            return NavigationService.getCurrentTitle();
        }

        /**
         * Calcula el progreso del tutorial
         * @returns {number} Porcentaje de progreso (0-100)
         */
        function getProgress() {
            return NavigationService.getProgress();
        }

        /**
         * Copia código al portapapeles
         * @param {string} type - Tipo de código ('cdn' o 'npm')
         */
        function copyCode(type) {
            ClipboardService.copyCode(type)
                .then(function(message) {
                    alert(message);
                })
                .catch(function(error) {
                    console.error(error);
                    alert('Error al copiar el código');
                });
        }
    }

})();

