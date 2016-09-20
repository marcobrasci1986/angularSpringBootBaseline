(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('EmployeeController', EmployeeController);

    EmployeeController.$inject = ['EmployeeService', 'NoDependencyService'];


    function EmployeeController(EmployeeService, NoDependencyService) {
        var vm = this;


        init();
        /**
         * TODO test init
         */
        function init() {
            console.log('init employee Controller');
            vm.multiply = NoDependencyService.multiply(5, 5);
        }

        vm.calculateSum = function (a, b) {
            vm.sum = NoDependencyService.sum(a, b);
        };

        vm.findEmployees = function () {
            EmployeeService.findEmployees().then(function (result) {
                vm.employees = result;
                vm.hasError = false;
                vm.size = result.length;
            }, function (e) {
                vm.hasError = true;
                console.error(e);
            });

        }


    }
}());