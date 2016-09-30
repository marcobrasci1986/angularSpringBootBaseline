/**
 * Import html-generator
 */
var reporter = require('cucumber-html-reporter');

var pathCucumberJsonFile = './Reports/report.json';
var pathCucumberHtmlFile = './Reports/report.html';

var cucumberHtmlReporterOptions = {
    theme: 'bootstrap',
    jsonFile: pathCucumberJsonFile,
    output: pathCucumberHtmlFile,
    reportSuiteAsScenarios: false,
    launchReport: true
};


exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 900000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        browserName: 'chrome'
    },
    specs: [
        'src/main/resources/static/test/e2e/features/*.feature'
    ],

    cucumberOpts: {
        require: [
            'src/main/resources/static/test/e2e/features/step_definitions/*.js',
            'src/main/resources/static/test/e2e/features/support/hooks.js'
        ],
        tags: false,
        format: 'json:' + pathCucumberJsonFile,
        profile: false,
        'no-source': true
    },
    onPrepare: function () {

        // browser.manage().window().maximize();
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;

    },
    onCleanUp: function () {
        console.log('onCleanUp');
    },
    afterLaunch: function () {
        console.log('afterLaunch');
        reporter.generate(cucumberHtmlReporterOptions);
    },

    params: {
        test: 'test-global-var'
    }

};