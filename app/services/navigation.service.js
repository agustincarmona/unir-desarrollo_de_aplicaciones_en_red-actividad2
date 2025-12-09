/**
 * @name NavigationService
 * @description Servicio para manejar la navegación y el estado del tutorial
 * 
 * Buenas prácticas aplicadas:
 * - Servicio como singleton para compartir estado
 * - Métodos públicos claramente definidos
 * - Lógica de negocio separada de los controladores
 * - Uso de 'this' en lugar de retornar objeto (factory pattern)
 */
(function() {
    'use strict';

    angular
        .module('tutorialApp')
        .service('NavigationService', NavigationService);

    NavigationService.$inject = ['MENU_ITEMS'];

    function NavigationService(MENU_ITEMS) {
        // Variables privadas del servicio
        var currentSection = 'intro';
        var visitedSections = ['intro'];
        var sidebarCollapsed = false;

        // API pública del servicio
        this.getCurrentSection = getCurrentSection;
        this.setCurrentSection = setCurrentSection;
        this.getVisitedSections = getVisitedSections;
        this.isSidebarCollapsed = isSidebarCollapsed;
        this.toggleSidebar = toggleSidebar;
        this.getProgress = getProgress;
        this.getCurrentTitle = getCurrentTitle;
        this.navigateTo = navigateTo;

        ////////////////

        /**
         * Obtiene la sección actual
         * @returns {string} ID de la sección actual
         */
        function getCurrentSection() {
            return currentSection;
        }

        /**
         * Establece la sección actual
         * @param {string} sectionId - ID de la sección
         */
        function setCurrentSection(sectionId) {
            currentSection = sectionId;
        }

        /**
         * Obtiene las secciones visitadas
         * @returns {Array} Array de IDs de secciones visitadas
         */
        function getVisitedSections() {
            return visitedSections;
        }

        /**
         * Verifica si el sidebar está colapsado
         * @returns {boolean} Estado del sidebar
         */
        function isSidebarCollapsed() {
            return sidebarCollapsed;
        }

        /**
         * Alterna el estado del sidebar
         */
        function toggleSidebar() {
            sidebarCollapsed = !sidebarCollapsed;
        }

        /**
         * Calcula el progreso del tutorial
         * @returns {number} Porcentaje de progreso (0-100)
         */
        function getProgress() {
            return Math.round((visitedSections.length / MENU_ITEMS.length) * 100);
        }

        /**
         * Obtiene el título de la sección actual
         * @returns {string} Título de la sección
         */
        function getCurrentTitle() {
            var current = MENU_ITEMS.find(function(item) {
                return item.id === currentSection;
            });
            return current ? current.title : 'Tutorial';
        }

        /**
         * Navega a una sección específica
         * @param {string} sectionId - ID de la sección destino
         */
        function navigateTo(sectionId) {
            currentSection = sectionId;
            
            // Marcar como visitada si no lo está
            if (visitedSections.indexOf(sectionId) === -1) {
                visitedSections.push(sectionId);
            }
            
            // Scroll al inicio
            window.scrollTo(0, 0);
        }
    }

})();

