/**
 * @name highlightOnHover
 * @description Directiva que resalta elementos al pasar el mouse
 * 
 * Buenas prácticas aplicadas:
 * - Directiva con responsabilidad única
 * - Uso de restrict: 'A' para atributo (apropiado para comportamiento)
 * - Cleanup de event listeners para evitar memory leaks
 * - Documentación clara del uso
 * 
 * @usage
 * <div highlight-on-hover>Este elemento se resaltará</div>
 * <div highlight-on-hover="'#ff0000'">Con color personalizado</div>
 */
(function() {
    'use strict';

    angular
        .module('tutorialApp')
        .directive('highlightOnHover', highlightOnHover);

    highlightOnHover.$inject = [];

    function highlightOnHover() {
        // Configuración por defecto
        var DEFAULT_COLOR = 'rgba(233, 69, 96, 0.1)';

        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        ////////////////

        /**
         * Función de linking de la directiva
         * @param {Object} scope - Scope de AngularJS
         * @param {Object} element - Elemento jqLite/jQuery
         * @param {Object} attrs - Atributos del elemento
         */
        function link(scope, element, attrs) {
            // Obtener color personalizado o usar el por defecto
            var highlightColor = attrs.highlightOnHover || DEFAULT_COLOR;
            var originalColor = '';

            // Event handlers
            function onMouseEnter() {
                originalColor = element.css('background-color');
                element.css('background-color', highlightColor);
            }

            function onMouseLeave() {
                element.css('background-color', originalColor);
            }

            // Registrar eventos
            element.on('mouseenter', onMouseEnter);
            element.on('mouseleave', onMouseLeave);

            // Cleanup: eliminar event listeners cuando el scope se destruye
            // Esto previene memory leaks
            scope.$on('$destroy', function() {
                element.off('mouseenter', onMouseEnter);
                element.off('mouseleave', onMouseLeave);
            });
        }
    }

})();

