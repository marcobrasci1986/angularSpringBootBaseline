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
            return Restangular.all("employees").getList();

        }

        /**
         * http://localhost:8080/employees/5
         * @return {*}
         * @private
         */
        function _findOne(id) {
            return Restangular.one('employees', id).get();

        }


    }
}());