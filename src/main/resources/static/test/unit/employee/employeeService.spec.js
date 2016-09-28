// 'use strict';
//
// describe("EmployeeServiceTest", function () {
//     var EmployeeService;
//     var httpBackend;
//     beforeEach(module('services'));
//
//
//     beforeEach(
//         inject(function (_EmployeeService_, _$httpBackend_) {
//             EmployeeService = _EmployeeService_;
//             httpBackend = _$httpBackend_;
//         })
//     );
//
//     it('should issue a GET to /employees/list', function () {
//         httpBackend.expectGET('/employees');
//
//         httpBackend.when('GET', '/employees').respond(["1", "2", "3"]);
//
//         EmployeeService.findEmployees();
//
//         httpBackend.flush();
//         httpBackend.verifyNoOutstandingExpectation();
//         httpBackend.verifyNoOutstandingRequest();
//     });
//
//     it('should issue a GET to /employees/id', function () {
//         httpBackend.expectGET('/employees/5');
//
//         httpBackend.when('GET', '/employees/5').respond({});
//
//         EmployeeService.findOne(5);
//
//         httpBackend.flush();
//         httpBackend.verifyNoOutstandingExpectation();
//         httpBackend.verifyNoOutstandingRequest();
//     });
// }); 