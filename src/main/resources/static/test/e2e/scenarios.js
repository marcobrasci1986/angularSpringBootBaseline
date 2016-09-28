'use strict';

describe('test employeeList', function () {

    /**
     * 1. Selenium webdriver must be running
     * 2. And our website must be running (on AFT)
     */
    beforeEach(function () {
        browser.get('http://localhost:8080/app/index.html#/employeeList');

        expect(browser.getTitle()).toEqual('Angular Baseline');
    });

    it('test', function () {
        expect(true).toBeTruthy()
    });

    it('test number of employees after one click', function () {
        var list = element.all(by.repeater('employee in vm.employees'));

        // before click on button the count should be 0
        expect(list.count()).toEqual(0);

        /**
         * Click on the btn 'find employees'
         */
        element.all(by.deepCss('button.btn')).first().click();

        /**
         * Wait for promise to resolve
         */
        browser.waitForAngular();
        expect(list.count()).toEqual(3);
    });

});