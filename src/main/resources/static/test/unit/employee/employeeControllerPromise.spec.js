'use strict';

describe('EmployeeControllerPromise', function () {
    var vm;
    var mockEmployeeService;
    var mockNoDependencyService;

    // Mock data 
    var employeeData = [{
        "id": 1,
        "first_name": "Kathleen",
        "last_name": "Sanders",
        "email": "ksanders0@hao123.com",
        "gender": "Female"
    }, {
        "id": 2,
        "first_name": "David",
        "last_name": "Kim",
        "email": "dkim1@nature.com",
        "gender": "Male"
    }, {
        "id": 3,
        "first_name": "Rachel",
        "last_name": "Mcdonald",
        "email": "rmcdonald2@tinyurl.com",
        "gender": "Female"
    }, {
        "id": 4,
        "first_name": "Cynthia",
        "last_name": "Berry",
        "email": "cberry3@deliciousdays.com",
        "gender": "Female"
    }, {
        "id": 5,
        "first_name": "Carolyn",
        "last_name": "Washington",
        "email": "cwashington4@blogs.com",
        "gender": "Female"
    }];

    /**
     * Invoke the module that has this controller inside of it
     */
    beforeEach(module('controllers'));

    /**
     * Setup up mock dependencies for the controller that you want to test
     */
    beforeEach(function () {
        mockEmployeeService = {
            findEmployees: {}
        };

        mockNoDependencyService = {
            sum: {},
            multiply: function (a, b) {
                return a * b;
            }

        };

        /**
         * Provide mocks that will be used to resolve dependencies for the controller that we want to test
         */
        module(function ($provide) {
            $provide.value('EmployeeServiceTraverson', mockEmployeeService);
            $provide.value('NoDependencyService', mockNoDependencyService);
        });

    });

    /**
     * Find the controller you want to test.
     * When Angular Injects the EmployeeService and NoDependencyService,
     * it will use the implementation we provided above
     */
    beforeEach(
        inject(function ($controller) {
            vm = $controller('EmployeeController');
        })
    );


    it("test find employees", function () {
        createPromiseFindEmployees(employeeData);

        expect(vm.employees).toBeUndefined();
        vm.findEmployees();
        expect(vm.employees).toEqual(employeeData);
        expect(vm.hasError).toBeFalsy();
    });

    it("test find employees different data", function () {
        var data = "test";

        createPromiseFindEmployees(data);

        expect(vm.employees).toBeUndefined();
        vm.findEmployees();
        expect(vm.employees).toEqual(data);
        expect(vm.hasError).toBeFalsy();
    });

    it("test find employees throws error", function () {
        var someError = "Some error";
        spyOn(mockEmployeeService, "findEmployees").and.throwError(someError);
        
        expect(vm.employees).toBeUndefined();
        
        expect(function () {
            vm.findEmployees();
        }).toThrowError(someError);


        expect(vm.employees).toBeUndefined();
        expect(vm.hasError).toBeTruthy();
    });


    /**
     * Setup the data that you will return when promise is resolved
     * @param data
     */
    function createPromiseFindEmployees(data) {
        spyOn(mockEmployeeService, 'findEmployees').and.callFake(function () {
            return {
                then: function (callback) {
                    return callback(data);
                }
            };
        });
    }

});