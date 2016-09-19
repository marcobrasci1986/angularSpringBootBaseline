(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('EmployeeController', EmployeeController);

    EmployeeController.$inject = ['EmployeeService', 'NoDependencyService'];


    function EmployeeController(EmployeeService, NoDependencyService) {
        var vm = this;


        init();

        function init() {
            console.log('init employee Controller');
            var sum = NoDependencyService.sum(5, 3);
            console.log('sum: ' + sum);

            findEmployees();

        }

        function findEmployees() {
            EmployeeService.findEmployees().then(function (result) {
                vm.employees = result
            }, function (e) {
                console.log('there');
            });

        }


    }
}());