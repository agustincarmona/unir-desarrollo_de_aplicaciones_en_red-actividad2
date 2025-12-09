/**
 * @name TodoController
 * @description Controlador para la demo de Lista de Tareas
 * 
 * Buenas prácticas aplicadas:
 * - Sintaxis controllerAs (vm = ViewModel)
 * - Bindable Members al inicio
 * - Métodos bien documentados
 * - Lógica clara y mantenible
 */
(function() {
    'use strict';

    angular
        .module('tutorialApp')
        .controller('TodoController', TodoController);

    TodoController.$inject = [];

    function TodoController() {
        /* jshint validthis: true */
        var vm = this;

        // ============================================
        // Bindable Members
        // ============================================
        vm.tareas = [];
        vm.nuevaTarea = '';

        // Métodos públicos
        vm.agregarTarea = agregarTarea;
        vm.agregarConEnter = agregarConEnter;
        vm.eliminarTarea = eliminarTarea;
        vm.getTareasPendientes = getTareasPendientes;
        vm.getTareasCompletadas = getTareasCompletadas;

        // ============================================
        // Activación
        // ============================================
        activate();

        function activate() {
            // Cargar tareas iniciales de ejemplo
            vm.tareas = getInitialTasks();
        }

        // ============================================
        // Implementación de métodos públicos
        // ============================================

        /**
         * Agrega una nueva tarea a la lista
         */
        function agregarTarea() {
            if (isValidTask(vm.nuevaTarea)) {
                vm.tareas.push(createTask(vm.nuevaTarea));
                vm.nuevaTarea = '';
            }
        }

        /**
         * Agrega tarea al presionar Enter
         * @param {Event} event - Evento de teclado
         */
        function agregarConEnter(event) {
            if (event.keyCode === 13) {
                agregarTarea();
            }
        }

        /**
         * Elimina una tarea por su índice
         * @param {number} index - Índice de la tarea a eliminar
         */
        function eliminarTarea(index) {
            if (index >= 0 && index < vm.tareas.length) {
                vm.tareas.splice(index, 1);
            }
        }

        /**
         * Obtiene el número de tareas pendientes
         * @returns {number} Cantidad de tareas no completadas
         */
        function getTareasPendientes() {
            return vm.tareas.filter(function(tarea) {
                return !tarea.completada;
            }).length;
        }

        /**
         * Obtiene el número de tareas completadas
         * @returns {number} Cantidad de tareas completadas
         */
        function getTareasCompletadas() {
            return vm.tareas.filter(function(tarea) {
                return tarea.completada;
            }).length;
        }

        // ============================================
        // Métodos privados (helpers)
        // ============================================

        /**
         * Obtiene las tareas iniciales de ejemplo
         * @returns {Array} Lista de tareas iniciales
         */
        function getInitialTasks() {
            return [
                { texto: 'Aprender AngularJS', completada: true },
                { texto: 'Crear mi primera aplicación', completada: false },
                { texto: 'Dominar las directivas', completada: false }
            ];
        }

        /**
         * Valida si el texto de la tarea es válido
         * @param {string} taskText - Texto de la tarea
         * @returns {boolean} True si es válido
         */
        function isValidTask(taskText) {
            return taskText && taskText.trim().length > 0;
        }

        /**
         * Crea un nuevo objeto de tarea
         * @param {string} texto - Texto de la tarea
         * @returns {Object} Objeto de tarea
         */
        function createTask(texto) {
            return {
                texto: texto.trim(),
                completada: false
            };
        }
    }

})();

