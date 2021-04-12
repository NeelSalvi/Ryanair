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
  'I make a search for booking from {string} to {string} on {string} to {string} for {int} adults and {int} child',
  async function (
    departure,
    destination,
    fromDate,
    toDate,
    noPassengersAdult,
    noPassengersChild
  ) {
    const homePage = new HomePage(this.driver)
    await this.driver.wait(
      async () => await homePage.getDepartureTextbox(),
      timeouts.STEP_TIMEOUTS.TIMEOUT
    )
    await homePage.enterDeparture(departure)
    await homePage.enterDestination(destination)
    await homePage.search()
    await homePage.enterFromDate(fromDate)
    await homePage.enterToDate(toDate)
    await homePage.enterPassengers(noPassengersAdult, noPassengersChild)
    await homePage.search()
  }
)

When('I book available flight and login', async function () {
  const flightSelectionPage = new FlightSelectionPage(this.driver)
  await this.driver.wait(
    async () => await flightSelectionPage.exists(),
    timeouts.STEP_TIMEOUTS.TIMEOUT
  )
  await flightSelectionPage.selectFlightFareValue()
  await flightSelectionPage.login()
})

When('I fill in passenger details', function (dataTable) {
  const passengerData = dataTable.hashes()
  const flightSelectionPage = new FlightSelectionPage(this.driver)
  flightSelectionPage.fillPassengerDetails(passengerData)
  // Write code here that turns the phrase above into concrete actions
  // return 'pending'
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
  'I fill in contact details country {string} and phone number {string}',
  function (country, phnumber) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending'
  }
)

When(
  'I fill in card details {string}, {string}, {string}, {string} and {string}',
  function (cardNo, cardType, expMonthAndYear, cvv, cardName) {
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
