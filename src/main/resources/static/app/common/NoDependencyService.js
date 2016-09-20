(function () {
    'use strict';
    angular
        .module('services')
        .factory('NoDependencyService', NoDependencyService);




    function NoDependencyService() {
        return {
            sum: _sum,
            multiply: _multiply

        };
        function _sum(a, b) {
            return a + b;
        }       
        function _multiply(a, b) {
            return a * b;
        }
    }
}());