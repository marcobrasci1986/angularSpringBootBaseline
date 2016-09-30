var employeePage = function () {
    "use strict";
    this.url = 'app/index.html';

    
    this.getPageTitle = function () {
        return element(by.css('h1')).getText();
    };


    this.findEmployeesButton = function () {
        return element(by.css("button.btn"));
    };
};
module.exports = employeePage;