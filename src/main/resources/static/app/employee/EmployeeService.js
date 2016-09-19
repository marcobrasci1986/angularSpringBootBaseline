(function () {
    'use strict';
    angular
        .module('services')
        .factory('EmployeeService', EmployeeService);


    EmployeeService.$inject = ['traverson', 'API_ROOT_URL'];

    function EmployeeService(traverson, API_ROOT_URL) {
        traverson.registerMediaType(TraversonJsonHalAdapter.mediaType, TraversonJsonHalAdapter);

        function request() {
            return traverson.from(API_ROOT_URL).json();
        }

        return {
            findEmployees: _findEmployees,
            sum: _sum

        };

        function _findEmployees() {
            return request()
                .getResource().result;

        }

        function _sum(a, b) {
            return a + b;
        }


    }
}());