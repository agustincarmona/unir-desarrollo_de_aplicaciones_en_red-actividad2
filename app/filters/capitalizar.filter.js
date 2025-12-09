/**
 * @name capitalizar
 * @description Filtro que capitaliza la primera letra de un texto
 * 
 * Buenas prácticas aplicadas:
 * - Filtro puro (sin efectos secundarios)
 * - Manejo de edge cases (null, undefined, vacío)
 * - Documentación del uso
 * 
 * @usage
 * {{ 'hola mundo' | capitalizar }}  => 'Hola mundo'
 * {{ nombre | capitalizar }}
 */
(function() {
    'use strict';

    angular
        .module('tutorialApp')
        .filter('capitalizar', capitalizar);

    capitalizar.$inject = [];

    function capitalizar() {
        return capitalizarFilter;

        ////////////////

        /**
         * Capitaliza la primera letra del texto
         * @param {string} input - Texto a capitalizar
         * @returns {string} Texto con primera letra en mayúscula
         */
        function capitalizarFilter(input) {
            // Manejo de edge cases
            if (!input || typeof input !== 'string') {
                return '';
            }

            // Eliminar espacios al inicio y final
            var trimmed = input.trim();
            
            if (trimmed.length === 0) {
                return '';
            }

            // Capitalizar primera letra, resto en minúsculas
            return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
        }
    }

})();

