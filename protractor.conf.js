/**
 * Import html-generator
 */
var reporter = require('cucumber-html-reporter');

/**
 * Path where json + html must be stored
 * @type {string}
 */
var reportsFolder = "./build/aft/";
var pathCucumberJsonFile = reportsFolder + 'report.json';
var pathCucumberHtmlFile = reportsFolder + 'report.html';

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
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        browserName: 'chrome'
    },
    /**
     * Add all you features here
     */
    specs: [
        'src/main/resources/static/test/e2e/features/*.feature'
    ],

    /**
     * Config protractor-cucumber-framework
     */
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
        console.log('onPrepare callback');
        var fs = require('fs');
        try {

            if (!fs.existsSync(reportsFolder)) {
                console.log('reportsFolder does not exist. Creating folder: ' + reportsFolder);
                fs.mkdirSync(reportsFolder);
            } else {
                console.log('ReportsFolder already exists.');
            }
        }
        catch (e) {
            console.error('Error creating reports folder in build', e);
        }
    },
    onCleanUp: function () {
        console.log('onCleanUp callback');
    },
    afterLaunch: function () {
        console.log('afterLaunch callback');
        console.log('Generating cucumberHtmlReports');
        reporter.generate(cucumberHtmlReporterOptions);
    },
    params: {
        test: 'test-global-var',
        baseUrl: 'http://localhost:8080/'
    }

};