'use strict'

const BasePage = require('./basePage')

const FLIGHT_TRIPS_IDENTIFIER = ''

class FlightTripsPage extends BasePage {
  constructor(driver) {
    super(driver, FLIGHT_TRIPS_IDENTIFIER)
  }
}

module.exports = FlightTripsPage
