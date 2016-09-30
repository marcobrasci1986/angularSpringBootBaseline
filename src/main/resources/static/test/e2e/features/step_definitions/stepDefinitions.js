'use strict';


var EmployeePage = require('../support/pages/employeePage');

/**
 * 1. Start Application
 * 2. Run locally: protractor protractor.conf.js --params.baseUrl http://localhost:8080/
 */
module.exports = function () {

    var employeePage = new EmployeePage();


    /**
     * protractor protractor.conf.js --params.baseUrl http://localhost:8080/
     *
     * The parameter must be supplied in the commandLine
     */
    var baseUrl = browser.params.baseUrl;

    this.Before(function (scenario) {
        console.log('Hook this.Before');
    });


    /**
     * Go the employee page and verify:
     * - app title
     * - page title
     */
    this.Given(/^I am on the employee page$/, function (callback) {
        browser.get(baseUrl + employeePage.url).then(function () {
            expect(employeePage.getPageTitle()).to.eventually.equal("Employee Page").and.notify(callback);
            expect(browser.getTitle()).to.eventually.equal('Angular Baseline').and.notify(callback);

        });
    });

    this.Then(/^I check the title of the page$/, function (callback) {
        expect(browser.getTitle()).to.eventually.equal('Force Assertion Error').and.notify(callback);
    });

    /**
     * repeater: "employee in vm.employees"
     */
    this.Then(/^I verify the count of table is (\d+)$/, function (expectedCount, callback) {
        element.all(by.repeater("employee in vm.employees")).count().then(function (tableRowCount) {
            expect(parseInt(expectedCount)).to.equal(tableRowCount);
            return callback();
        });
    });

    /**
     * Find an element with the given css and click it.
     */
    this.Then(/^I click the button to find employees$/, function (callback) {
        employeePage.findEmployeesButton().click().then(function () {
            return callback();
        })
    });


    this.After(function (scenario, callback) {
        console.log('Hook: this.After');
        if (scenario.isFailed()) {
            console.log('Scenario failed, taking a screenshot.');

            browser.takeScreenshot().then(function (png) {
                var decodedImage = new Buffer(png, 'base64');
                scenario.attach(decodedImage, 'image/png', callback);
            }, function (err) {
                callback(err)
            });
        } else {
            callback();
        }
    });


};