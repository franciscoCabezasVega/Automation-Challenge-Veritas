Feature: Shopping page Add item
Background: SauceDemo application Add item
  Given I open the SauceDemo application

@a @b
Scenario: Add an item to Cart with valid user
  And I logged in with my user "standard_user"
  And I logged in with my password "secret_sauce"
  And I click on the Login button
  And I should be successfully logged in
  Given I am browsing a list of items
  When I select an item 
  And I click on the Add to Cart button
  Then the item should be added to the user's cart

@a @b
Scenario: Add an item to Cart with valid user
  And I logged in with my user "problem_user"
  And I logged in with my password "secret_sauce"
  And I click on the Login button
  And I should be successfully logged in
  Given I am browsing a list of items
  When I select an item 
  And I click on the Add to Cart button
  Then the item should be added to the user's cart