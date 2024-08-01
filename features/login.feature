Feature: Amazon Shopping

  Scenario: Login to Amazon site, and check out a product
    Given I open the Amazon Site
    When I log in with valid credentials

    When I search for the deals "Deals"
    Then I add the first deal to the cart and do checkout
    
