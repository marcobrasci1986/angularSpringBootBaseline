# angularSpringBootBaseline

DEBUG
Links:
- http://ng-learn.org/2014/08/Testing_Promises_with_Jasmine_Provide_Spy/

TODO:
- Use $httpBackend to test Repository (Restangular );
- Execute karma through gradle:
http://stackoverflow.com/questions/22336537/how-to-run-js-karma-tests-from-gradle
https://github.com/craigburke/karma-gradle


Protractor
https://semaphoreci.com/community/tutorials/getting-started-with-protractor-and-cucumber
https://github.com/igniteram/protractor-cucumber-allure/tree/master/StepDefinitions
npm install protractor -g
webdriver-manager update
webdriver-manager start (leave it running)
protractor protractor.conf.js (new terminal)
protractor protractor.conf.js --params.baseUrl http://localhost:8080/

find global node dir:
npm root -g

install in intellj
add node plugin
new node config
C:\Users\mbrasci\AppData\Roaming\npm\node_modules\protractor\bin\protractor
protractor.conf.js

Page Objects + Configuring Test Suites:
http://stuff.aftnn.org/acceptance-testing-cucumber.js-protractor/#1
https://github.com/angular/protractor/blob/master/docs/page-objects.md?__hstc=233161921.7487beeeae4d0a86c335be0f703ea7c6.1475066733203.1475135864534.1475139008823.4&__hssc=233161921.2.1475139008823&__hsfp=3412413957#with-pageobjects


Protractor framework: 'cucumber': https://github.com/mattfritz/protractor-cucumber-framework
HTML report generator: https://github.com/gkushang/cucumber-html-reporter

Protractor config: https://github.com/angular/protractor/blob/master/lib/config.ts

Hooks add to step: http://stackoverflow.com/questions/31180389/loading-hooks-in-cucumberjs-with-protractor-and-gulp



