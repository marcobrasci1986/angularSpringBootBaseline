(function () {
    'use strict';
    angular
        .module('services')
        .factory('NoDependencyService', NoDependencyService);




    function NoDependencyService() {
        return {
            sum: _sum

        };
        function _sum(a, b) {
            return a + b;
        }
    }
}());