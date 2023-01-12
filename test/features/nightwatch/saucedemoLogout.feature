Feature: Shopping page Logout
Background: SauceDemo application Logout
  Given I open the SauceDemo application

@a @b
Scenario: Log out SauceDemo application with valid user
  And I logged in with my user "standard_user"
  And I logged in with my password "secret_sauce"
  And I click on the Login button
  And I should be successfully logged in
  When I click on the Logout button
  Then I should be successfully logged out

@a @b
Scenario: Log out SauceDemo application with invalid user
  And I logged in with my user "problem_user"
  And I logged in with my password "secret_sauce"
  And I click on the Login button
  And I should be successfully logged in
  When I click on the Logout button
  Then I should be successfully logged out