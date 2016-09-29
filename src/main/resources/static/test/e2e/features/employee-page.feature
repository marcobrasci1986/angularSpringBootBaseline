Feature: Employees List
  In order to see the list of employees
  I need to click on a button

  Scenario: Find employees by clicking on the button
    Given I am on the employee page
    Then I verify the count of table is 0
    Then I click the button to find employees
    Then I verify the count of table is 3
