Feature: Shopping page Checkout
Background: SauceDemo application Checkout
  Given I open the SauceDemo application

@a @b
Scenario: Checkout an item in the Cart with valid user
  And I logged in with my user "standard_user"
  And I logged in with my password "secret_sauce"
  And I click on the Login button
  And I am viewing the items in my cart
  And I select an item
  And I click on the Add to Cart button
  And the item should be added to the user's cart
  When I click on the Checkout button
  Then the user should be taken to the information checkout page
  And I click on the Finish button
  And the payment process should be completed successfully

@a @b
Scenario: Checkout an item in the Cart with invalid user
  And I logged in with my user "problem_user"
  And I logged in with my password "secret_sauce"
  And I click on the Login button
  And I am viewing the items in my cart
  And I select an item
  And I click on the Add to Cart button
  And the item should be added to the user's cart
  When I click on the Checkout button
  Then the user should be taken to the information checkout page
  And I click on the Finish button
  And the payment process should be completed successfully