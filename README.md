# angularSpringBootBaseline

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
Run karma start to run the unit tests

# E2E Tests (Protractor + CucumberJs)
1. Run the app to it is running on http://localhost:8080/
1. Open up a terminal and launch webdriver: webdriver-manager start  (leave this running)
1. Open up another terminal and start the protractor tests with: protractor protractor.conf.js --params.baseUrl http://localhost:8080/



