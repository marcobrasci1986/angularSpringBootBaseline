(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('EmployeeController', EmployeeController);

    EmployeeController.$inject = ['EmployeeService', 'NoDependencyService'];


    function EmployeeController(EmployeeService, NoDependencyService) {
        var vm = this;

        vm.hasError = 'test';


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
            vm.sumPlus10 = vm.sum + 10;
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
        };
        
        vm.findOne = function () {
            EmployeeService.findOne(5).then(function (result) {
                console.log('result: ' + result);
                vm.one = result;
            }, function (e) {
                console.error(e);
            });
        };


    }
}());