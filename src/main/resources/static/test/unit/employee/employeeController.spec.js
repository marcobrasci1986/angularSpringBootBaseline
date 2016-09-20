'use strict';

describe('EmployeeController', function () {
    var vm;
    var mockEmployeeService;
    var mockNoDependencyService;
    var $q;
    var deferred, $rootScope;

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
     * Setup up dependencies for the controller that you want to test
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
            $provide.value('EmployeeService', mockEmployeeService);
            $provide.value('NoDependencyService', mockNoDependencyService);
        });

    });

    /**
     * Find the controller you want to test
     */
    beforeEach(
        inject(function ($controller, _$q_, _$rootScope_) {
            $q = _$q_;
            
            $rootScope = _$rootScope_;
            deferred = $q.defer();

            // Use a Jasmine Spy to return the deferred promise
            spyOn(mockEmployeeService, 'findEmployees').and.returnValue(deferred.promise);

            vm = $controller('EmployeeController');
        })
    );

    it('test Calculate sum', function () {
        spyOn(mockNoDependencyService, 'sum').and.returnValue(5 + 3);

        vm.calculateSum(5, 3);
        expect(vm.sum).toBe(8);

        /**
         * Verify the exact params were used in the call to the mock
         */
        expect(mockNoDependencyService.sum).toHaveBeenCalledWith(5, 3);
    });

    /**
     * CallFake example
     */
    it("calculate sum callFake", function () {
        spyOn(mockNoDependencyService, 'sum').and.callFake(function (a, b) {
            return a * b;
        });

        vm.calculateSum(5, 5);

        expect(vm.sum).toBe(25);

        expect(mockNoDependencyService.sum).toHaveBeenCalledWith(5, 5);
    });
    


    // it("test find employees", function () {
    //
    //
    //     deferred.promise.then(function (value) {
    //         expect(vm.employees).toEqual(employeeData);
    //     });
    //    
    //     // Setup the data we wish to return for the .then function in the controller
    //     deferred.resolve(employeeData);
    //     $rootScope.$digest();
    //    
    //     vm.findEmployees();
    //    
    // });

});