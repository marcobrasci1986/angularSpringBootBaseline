// (function () {
//     'use strict';
//     angular
//         .module('services')
//         .factory('EmployeeService', EmployeeService);
//
//
//     EmployeeService.$inject = ['traverson', 'API_ROOT_URL'];
//
//     function EmployeeService(traverson, API_ROOT_URL) {
//         traverson.registerMediaType(TraversonJsonHalAdapter.mediaType, TraversonJsonHalAdapter);
//
//         function request() {
//             return traverson.from(API_ROOT_URL).useAngularHttp().jsonHal().withRequestOptions({headers: {'accept': 'application/hal+json'}});
//         }
//
//         return {
//             findEmployees: _findEmployees,
//             findOne: _findOne
//         };
//
//         function _findEmployees() {
//             return request()
//                 .follow("employees", "list")
//                 .getResource().result;
//
//         }        
//        
//         function _findOne() {
//             return request()
//                 .follow("employees", "one")
//                 .getResource().result;
//
//         }
//
//
//     }
// }());