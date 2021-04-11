'use strict'

const BasePage = require('./basePage')

const FLIGHT_EXTRAS_IDENTIFIER = ''

class FlightExtrasPage extends BasePage {
  constructor(driver) {
    super(driver, FLIGHT_EXTRAS_IDENTIFIER)
  }
}

module.exports = FlightExtrasPage
