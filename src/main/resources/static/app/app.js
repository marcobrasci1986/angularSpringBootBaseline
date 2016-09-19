(function () {
    "use strict";

    var app = angular.module("angularBaseline",
        [
            'controllers',
            'services',
            'ui.router'

        ]);

    angular.module('controllers', []);
    angular.module('services', ['traverson']);

    app.constant('API_ROOT_URL', 'http://localhost:8080/api');

    app.config(StateController);

    StateController.$inject = ['$stateProvider', '$urlRouterProvider'];
    function StateController($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/employeeList');

        $stateProvider
            .state('employeeList', {
                url: '/employeeList',
                templateUrl: 'employee/employee.html',
                controller: 'EmployeeController',
                controllerAs: 'vm'
            })
    }

}());