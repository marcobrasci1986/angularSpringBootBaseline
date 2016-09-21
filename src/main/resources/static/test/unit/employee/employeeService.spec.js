'use strict';

describe("EmployeeServiceTest", function () {
    var EmployeeService;
    var httpBackend;
    beforeEach(module('services'));
    

    beforeEach(
        inject(function (_EmployeeService_, _$httpBackend_) {
            EmployeeService = _EmployeeService_;
            httpBackend = _$httpBackend_;
        })
    );

    it('should issue a GET to /employees/list', function () {
        httpBackend.expectGET('/employees');
        
        httpBackend.when('GET', '/employees').respond({});
        
        EmployeeService.findEmployees();
    
        httpBackend.flush();
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
}); 