exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['src/main/resources/static/test/e2e/**/*.js'],
    capabilities: {
        browserName: 'chrome'
    }

};