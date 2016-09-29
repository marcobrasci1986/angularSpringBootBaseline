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
        require: 'src/main/resources/static/test/e2e/features/step_definitions/stepDefinitions.js',
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    },
    
    params: {
        test: 'test-global-var'
    }

};