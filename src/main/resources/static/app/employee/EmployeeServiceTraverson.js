(function () {
    'use strict';
    angular
        .module('services')
        .factory('EmployeeServiceTraverson', EmployeeServiceTraverson);


    /**
     * http://localhost:8080/api
     * http://localhost:8080/api/employees/list
     * @type {string[]}
     */
    function EmployeeServiceTraverson(TraversonService, API_ROOT_URL) {
        return {
            findEmployees: _findEmployees,
            findOne: _findOne
        };

        traverson.registerMediaType(TraversonJsonHalAdapter.mediaType, TraversonJsonHalAdapter);


        return {
            findEmployees: _findEmployees,
            findOne: _findOne
        };

        function _findEmployees() {
            return TraversonService
                .request(API_ROOT_URL)
                .follow("list")
                .getResource().result;

        }

        function _findOne() {
            return TraversonService
                .request(API_ROOT_URL)
                .follow("find")
                .withTemplateParameters({id: 5})
                .getResource().result;

        }


    }
}());