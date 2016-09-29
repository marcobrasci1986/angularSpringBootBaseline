var employeePage = function () {
    "use strict";
    this.url = 'app/index.html';

    var pageTitle = element(by.css('h1'));
    var findEmployeesButton = element(by.css("button.btn"));



    this.getPageTitle = function () {
        return pageTitle.getText();
    };       
    
    
    this.findEmployeesButton = function () {
        return findEmployeesButton;
    };
};
module.exports = employeePage;