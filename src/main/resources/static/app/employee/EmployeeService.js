(function () {
    'use strict';
    angular
        .module('services')
        .factory('EmployeeService', EmployeeService);


    /**
     * http://localhost:8080/api
     * http://localhost:8080/api/employees/list
     * @type {string[]}
     */
    EmployeeService.$inject = ['Restangular', 'API_ROOT_URL'];

    function EmployeeService(Restangular, API_ROOT_URL) {
        var base = Restangular.all("employees");

        return {
            findEmployees: _findEmployees,
            findOne: _findOne
        };

        function _findEmployees() {
            return base.customGET('list');

        }        
        
        function _findOne() {
            return base.customGET('one');

        }


    }
}());