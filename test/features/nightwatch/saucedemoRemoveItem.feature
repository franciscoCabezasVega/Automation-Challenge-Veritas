Feature: Shopping page Remove item
Background: SauceDemo application Remove item
  Given I open the SauceDemo application

@a @b
Scenario: Remove an item from the Cart with valid user
  And I logged in with my user "standard_user"
  And I logged in with my password "secret_sauce"
  And I click on the Login button
  And I am viewing the items in my cart
  And I select an item
  And I click on the Add to Cart button
  And the item should be added to the user's cart
  When I click on the Remove button
  Then the item should be removed from the user's cart

@a @b
Scenario: Remove an item from the Cart with invalid user
  And I logged in with my user "problem_user"
  And I logged in with my password "secret_sauce"
  And I click on the Login button
  And I am viewing the items in my cart
  And I select an item
  And I click on the Add to Cart button
  And the item should be added to the user's cart
  When I click on the Remove button
  Then the item should be removed from the user's cart