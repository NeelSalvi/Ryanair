const assert = require('chai').assert
const { Given, When, Then } = require('@cucumber/cucumber')
const And = Then
const HomePage = require('../pages/homePage')
const FlightSelectionPage = require('../pages/flightSelectionPage')
const SeatSelectionPage = require('../pages/seatSelectionPage')
const BaggageSelectionPage = require('../pages/baggageSelectionPage')
const FlightExtrasPage = require('../pages/flightExtrasPage')
const FlightTripsPage = require('../pages/flightTripsPage')
const CheckoutPage = require('../pages/checkoutPage')
const timeouts = require('../support/constants')

Given('I am on main page', async function () {
  const homePage = new HomePage(this.driver)
  await homePage.acceptCookies()
  await this.driver.wait(
    async () => await homePage.exists(),
    timeouts.STEP_TIMEOUTS.TIMEOUT
  )
})
When(
  'I make a search for booking from {string} to {string} on {string} for {int} adults and {int} child',
  async function (
    departure,
    destination,
    date,
    noPassengersAdult,
    noPassengersChild
  ) {
    const homePage = new HomePage(this.driver)
    await this.driver.wait(
      async () => await homePage.getDepartureTextbox(),
      timeouts.STEP_TIMEOUTS.TIMEOUT
    )
    // const departure = await homePage.getDepartureTextbox()
    // const destination = await homePage.getDestinationTextbox()
    // assert.exists(departure)
    // assert.exists(destination)
    homePage.enterDeparture(departure)
    homePage.enterDestination(destination)
    const a = 10
  }
)

When('I book available flight', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

When('I select seats for {int} passengers', function (noPassengers) {
  // When('I select seats for {float} passengers', function (float) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

When('I checkout my booking', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

When(
  'I fill in adult passenger details {string}, {string} and {string}',
  function (prefix, fname, lname) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending'
  }
)

When(
  'I fill in second adult passenger details {string}, {string} and {string}',
  function (prefix, fname, lname) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending'
  }
)

When(
  'I fill in child passenger details {string} and {string}',
  function (fname, lname) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending'
  }
)

When(
  'I fill in contact details country {string} and phone number {string}',
  function (country, phnumber) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending'
  }
)

When(
  'I fill in card details {string}, {string}, {string}/{string}, {string} and {string}',
  function (cardNo, cardType, expMonth, expYear, cvv, cardName) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending'
  }
)

When(
  'I fill in billing address details {string} and city {string}',
  function (addr, city) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending'
  }
)

When('I pay for booking', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Then('I should get payment declined message', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})
