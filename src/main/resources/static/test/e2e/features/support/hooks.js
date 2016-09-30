/**
 * Specify common tasks used for all scenario's.
 *
 * Config: cucumberOpts in protractor.conf.js
 * @constructor
 */
var Hooks = function () {
    this.Before(function (scenario, callback) {
        console.log('Hook this.Before');

        callback();
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

module.exports = Hooks;