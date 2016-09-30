'use strict';

var EmployeePage = require('../support/pages/employeePage');

/**
 * 1. Start Application
 * 2. Run locally: protractor protractor.conf.js --params.baseUrl http://localhost:8080/
 */
module.exports = function () {
    this.World = require("../support/world.js").World;

    var employeePage = new EmployeePage();
    
    /**
     * Go the employee page and verify:
     * - app title
     * - page title
     */
    this.Given(/^I am on the employee page$/, function (callback) {
        this.testMethod();

        browser.get(this.baseUrl + employeePage.url).then(function () {
            expect(employeePage.getPageTitle()).to.eventually.equal("Employee Page")
                .and.notify(callback);
            expect(browser.getTitle()).to.eventually.equal('Angular Baseline')
                .and.notify(callback);
        });
    });

    this.Then(/^I check the title of the page$/, function (callback) {
        expect(browser.getTitle()).to.eventually.equal('Force Assertion Error')
            .and.notify(callback);
    });

    /**
     * repeater: "employee in vm.employees"
     */
    this.Then(/^I verify the count of table is (\d+)$/, function (expectedCount, callback) {
        var countPromise = element.all(by.repeater("employee in vm.employees")).count();
        expect(countPromise).to.eventually.equal(parseInt(expectedCount)).and.notify(callback);
    });

    /**
     * Find an element with the given css and click it.
     */
    this.Then(/^I click the button to find employees$/, function (callback) {
        employeePage.findEmployeesButton().click().then(callback)
    });


};