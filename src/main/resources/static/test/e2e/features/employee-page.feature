Feature: Employees List
  In order to see the list of employees
  I need to click on a button

  Scenario: Find employees by clicking on the button
    Given I am on the page "app/index.html"
    Then I verify the count of table with repeater "employee in vm.employees" is 0
    Then I click the button with css "button.btn"
    Then I verify the count of table with repeater "employee in vm.employees" is 3
