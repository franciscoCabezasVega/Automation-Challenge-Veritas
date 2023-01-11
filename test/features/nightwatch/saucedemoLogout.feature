Feature: Shopping page Logout
Background: SauceDemo application Logout
  Given I open the SauceDemo application
  And I logged in with my user "standard_user"
  And I logged in with my password "secret_sauce"
  And I click on the Login button
  And I should be successfully logged in

@a @b
Scenario: Log out SauceDemo application with valid url
  When I click on the Logout button
  Then I should be successfully logged out