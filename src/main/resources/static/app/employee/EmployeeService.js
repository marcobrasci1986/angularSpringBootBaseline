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
    EmployeeService.$inject = ['Restangular'];

    function EmployeeService(Restangular) {
        var base = Restangular.all("employees");

        return {
            findEmployees: _findEmployees,
            findOne: _findOne
        };

        /**
         * http://localhost:8080/employees/
         * @return {*}
         * @private
         */
        function _findEmployees() {
            return Restangular.all("employees").get("");

        }

        /**
         * http://localhost:8080/employees/one
         * @return {*}
         * @private
         */
        function _findOne() {
            return base.customGET('one');

        }


    }
}());