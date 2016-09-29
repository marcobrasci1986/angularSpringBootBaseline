var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

/**
 * 1. Start Application
 * 2. Run locally: protractor protractor.conf.js --params.baseUrl http://localhost:8080/
 */
module.exports = function () {

    /**
     * protractor protractor.conf.js --params.baseUrl http://localhost:8080/
     *
     * The parameter must be supplied in the commandLine
     */
    var baseUrl = browser.params.baseUrl;
    

    /**
     * Go the employee page and verify:
     * - app title
     * - page title
     */
    this.Given(/^I am on the page "(.*)"$/, function (page, callback) {
        console.log('browser.params.test added in protractor.conf.js: ' + browser.params.test);
        browser.get(baseUrl + page).then(function () {


            var title = element(by.css('h1'));
            expect(title.getText()).to.eventually.equal("Employee Page");
            expect(browser.getTitle()).to.eventually.equal('Angular Baseline');
            return callback();
        })

    });

    /**
     * repeater: "employee in vm.employees"
     */
    this.Then(/^I verify the count of table with repeater "(.*)" is (\d+)$/, function (repeater, expectedCount, callback) {
        element.all(by.repeater(repeater)).count()
            .then(function (tableRowCount) {
                expect(parseInt(expectedCount)).to.equal(tableRowCount);
                return callback();
            });

    });

    /**
     * Find an element with the given css and click it.
     */
    this.Then(/^I click the button with css "(.*)"$/, function (cssClass, callback) {
        element(by.css(cssClass))
            .click()
            .then(callback)
    });


};