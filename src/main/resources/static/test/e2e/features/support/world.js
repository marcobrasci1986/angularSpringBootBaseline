/**
 * Add common stuff here.
 * @constructor
 */
function World() {
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    global.expect = chai.expect;
    
    console.log("Constructing World Object");
    /**
     * protractor protractor.conf.js --params.baseUrl http://localhost:8080/
     *
     * The parameter must be supplied in the commandLine
     *
     * Use in stepsDefinition like: this.baseUrl
     */
    this.baseUrl = browser.params.baseUrl;

    /**
     * Use in stepsDefinition like: this.testMethod()
     */
    this.testMethod = function () {
        console.log('Some Test method');
    }
}

module.exports.World = World;