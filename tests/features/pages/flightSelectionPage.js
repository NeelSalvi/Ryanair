'use strict'

const BasePage = require('./basePage')

const FLIGHT_SELECTION_IDENTIFIER = ''

class FlightSelectionPage extends BasePage {
  constructor(driver) {
    super(driver, FLIGHT_SELECTION_IDENTIFIER)
  }
}

module.exports = FlightSelectionPage
