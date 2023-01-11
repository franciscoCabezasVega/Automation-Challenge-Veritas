Feature: Shopping page Login
Background: SauceDemo application Login
  Given I open the SauceDemo application

@a @b
Scenario: Log In SauceDemo application with valid user
  Given I logged in with my user "standard_user"
  When I logged in with my password "secret_sauce"
  And I click on the Login button
  Then I should be successfully logged in

@a @b
Scenario: Log In SauceDemo application with invalid user
  Given I logged in with my user "problem_user"
  When I logged in with my password "secret_sauce"
  And I click on the Login button
  Then I should be successfully logged in

@a @b
Scenario: Log In SauceDemo application with invalid user and invalid password
  Given I logged in with my user "problem_user"
  When I logged in with my password "P@sswOrd"
  And I click on the Login button
  Then I should be successfully logged in
