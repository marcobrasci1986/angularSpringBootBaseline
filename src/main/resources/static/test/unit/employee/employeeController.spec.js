'use strict';

describe('EmployeeController', function () {
    var vm;
    var mockEmployeeService;
    var mockNoDependencyService;

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
            $provide.value('EmployeeService', mockEmployeeService);
            $provide.value('NoDependencyService', mockNoDependencyService);
        });

    });

    /**
     * Find the controller you want to test. Will use the above services in DI
     */
    beforeEach(
        inject(function ($controller) {
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
        expect(vm.sumPlus10).toBe(35);

        expect(mockNoDependencyService.sum).toHaveBeenCalledWith(5, 5);
    });
    
    
});