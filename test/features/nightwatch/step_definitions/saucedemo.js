const { Given, Then, When, Before } = require('@cucumber/cucumber');
const {
  firstName,
  lastName,
  zipCode
} = require('../../../../constans');

Given(/^I open the SauceDemo application$/, () => {
  browser.navigateTo('https://www.saucedemo.com/');
});

Given(/^I logged in with my user "([^"]*)"$/, async (user) => {
var loginPage = browser.page.loginPage()
  await loginPage
    .waitForElementVisible('@username')
    .setValue('@username', [user])
    .pause(1000);
});

Given(/^I logged in with my password "([^"]*)"$/, async (password) => {
  var loginPage = browser.page.loginPage()
  await loginPage
    .waitForElementVisible('@password')
    .setValue('@password', [password])
    .pause(1000);
});

When(/^I click on the Login button$/, async () => {
  var loginPage = browser.page.loginPage()
  await loginPage
    .waitForElementVisible('@loginBtn')
    .click('@loginBtn')
    .pause(1000);
});

Then(/^I should be successfully logged in$/, () => {
  browser
    .useXpath()
    .verify.textContains("//span[contains(text(),'Products')]", 'PRODUCTS');
});

When(/^I click on the Logout button$/, async () => {
  var productPage = browser.page.productPage()
  await productPage
    .waitForElementVisible('@menu')
    .click('@menu')
    .pause(1000)
    .waitForElementVisible('@logoutBtn')
    .click('@logoutBtn')
    .pause(1000);
});

Then(/^I should be successfully logged out$/, () => {
  browser.expect.url().toContain('https://www.saucedemo.com')
});

Given(/^I am browsing a list of items$/, async () => {
  var productPage = browser.page.productPage()
  await productPage
    .waitForElementVisible('@productList')
    .verify.elementPresent('@productList')
    .pause(1000);
});

When(/^I select an item$/, () => {
  var productPage = browser.page.productPage()
  productPage.waitForElementVisible('@productList');
});

When(/^I click on the Add to Cart button$/, async () => {
  var productPage = browser.page.productPage()
  await productPage
    .click('@addToCartButton')
    .pause(1000);
});

Then(/^the item should be added to the user's cart$/, async () => {
  var cartPage = browser.page.cartPage()
  await cartPage
    .click('@cartButton')
    .pause(1000)
    .verify.textContains('@productName', 'Sauce Labs Backpack')
    .pause(1000);
});

Given(/^I am viewing the items in my cart$/, async () => {
  var cartPage = browser.page.cartPage()
  await cartPage
    .waitForElementVisible('@productName')
    .verify.elementPresent('@productName')
    .pause(1000);
});

When(/^I click on the Remove button$/, async () => {
  var cartPage = browser.page.cartPage()
  await cartPage
    .waitForElementVisible('@removeCartButton')
    .click('@removeCartButton')
    .pause(1000);
});

Then(/^the item should be removed from the user's cart$/, async () => {
  var cartPage = browser.page.cartPage()
  await cartPage
    .click('@cartButton')
    .pause(1000)
    .verify.not.elementPresent('@productName')
    .pause(1000);
});

When(/^I click on the Checkout button$/, async () => {
  var cartPage = browser.page.cartPage()
  await cartPage
    .waitForElementVisible('@checkoutCartButton')
    .click('@checkoutCartButton')
    .pause(1000);
});

Then(/^the user should be taken to the information checkout page$/, async () => {
  var chekoutInfoPage = browser.page.checkoutInformationPage()
  await chekoutInfoPage
    .waitForElementVisible('@name')
    .setValue('@name', firstName)
    .pause(1000)
    .waitForElementVisible('@lastname')
    .setValue('@lastname', lastName)
    .pause(1000)
    .waitForElementVisible('@postalCode')
    .setValue('@postalCode', zipCode)
    .pause(1000)
    .waitForElementVisible('@continueButton')
    .click('@continueButton')
    .pause(1000);
});

Then(/^I click on the Finish button$/, async () => {
  var chekoutOverPage = browser.page.checkoutOverviewPage()
  await chekoutOverPage
    .waitForElementVisible('@finishButton')
    .click('@finishButton')
    .pause(1000);
});

Then(/^the payment process should be completed successfully$/, () => {
  var chekoutCompletePage = browser.page.checkoutCompletePage()
  chekoutCompletePage
    .waitForElementVisible('@successfulTitle')
    .verify.textContains('@successfulTitle', 'THANK YOU FOR YOUR ORDER');
});
