'use strict';

describe("EmployeeServiceTest", function () {
    var EmployeeService;
    var httpBackend;
    beforeEach(module('services'));

    beforeEach(function () {

        /**
         * When any service asks for an EmployeeService, use this one
         */
        module(function ($provide) {
            $provide.value('API_ROOT_URL', "http://localhost:8080/api");
        });
    });

    beforeEach(
        inject(function (_EmployeeService_, _$httpBackend_) {
            EmployeeService = _EmployeeService_;
            httpBackend = _$httpBackend_;
        })
    );

    // it('should issue a GET to /employees/list', function () {
    //     httpBackend.expectGET('http://localhost:8080/api');
    //     httpBackend.expectGET('http://localhost:8080/api/employees');
    //     // httpBackend.expectGET('http://localhost:8080/api/employees/list');
    //
    //     httpBackend.when('GET', 'http://localhost:8080/api').respond({});
    //     // httpBackend.when('GET', 'http://localhost:8080/api/employees').respond({});
    //     // httpBackend.when('GET', 'http://localhost:8080/api/employees/list').respond({});
    //
    //     EmployeeService.findEmployees();
    //
    //     httpBackend.flush();
    //     httpBackend.verifyNoOutstandingExpectation();
    //     httpBackend.verifyNoOutstandingRequest();
    // });
}); 