# angularSpringBootBaseline
A simple baseline project with angular unit tests and e2e tests with protractor and cucumberJs

# Installation
- npm install
- bower install

# API
http://localhost:8080/api
http://localhost:8080/employees -> returns a hardcoded list of employees

# AngularApp
The app is just one simple page. You can find it at http://localhost:8080/app/index.html.

Click the button 'find employee' to load the hardcoded list

# Unit Tests (Jasmine)
Run [karma start] to run the unit tests

Reports are located under src/main/resources/static/build/coverage

# E2E Tests (Protractor + CucumberJs)
1. Launch the app so it is running on http://localhost:8080/
1. Update webdriver: [webdriver-manager update] (only first time)
1. Open up a terminal and launch webdriver: [webdriver-manager start]  (leave this running)
1. Open up another terminal and start the protractor tests with: [protractor protractor.conf.js --params.baseUrl http://localhost:8080/]

Reports (json + html + screenshots) are located under ./Reports


