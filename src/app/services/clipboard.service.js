/**
 * @name ClipboardService
 * @description Servicio para manejar operaciones del portapapeles
 * 
 * Buenas prácticas aplicadas:
 * - Responsabilidad única (solo maneja el portapapeles)
 * - Promesas para operaciones asíncronas
 * - Manejo de errores
 */
(function() {
    'use strict';

    angular
        .module('tutorialApp')
        .service('ClipboardService', ClipboardService);

    ClipboardService.$inject = ['$q', 'CODE_SNIPPETS'];

    function ClipboardService($q, CODE_SNIPPETS) {
        // API pública
        this.copyCode = copyCode;
        this.getCodeSnippet = getCodeSnippet;

        ////////////////

        /**
         * Copia código al portapapeles
         * @param {string} type - Tipo de código a copiar ('cdn' o 'npm')
         * @returns {Promise} Promesa que resuelve cuando se copia el código
         */
        function copyCode(type) {
            var deferred = $q.defer();
            var code = CODE_SNIPPETS[type] || '';

            if (!code) {
                deferred.reject('Tipo de código no válido');
                return deferred.promise;
            }

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(code)
                    .then(function() {
                        deferred.resolve('¡Código copiado!');
                    })
                    .catch(function(err) {
                        deferred.reject('Error al copiar: ' + err);
                    });
            } else {
                // Fallback para navegadores antiguos
                try {
                    fallbackCopyText(code);
                    deferred.resolve('¡Código copiado!');
                } catch (err) {
                    deferred.reject('Error al copiar: ' + err);
                }
            }

            return deferred.promise;
        }

        /**
         * Obtiene un snippet de código
         * @param {string} type - Tipo de código
         * @returns {string} Código correspondiente
         */
        function getCodeSnippet(type) {
            return CODE_SNIPPETS[type] || '';
        }

        /**
         * Método fallback para copiar texto (navegadores antiguos)
         * @param {string} text - Texto a copiar
         */
        function fallbackCopyText(text) {
            var textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    }

})();

