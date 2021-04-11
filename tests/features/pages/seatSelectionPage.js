'use strict'

const BasePage = require('./basePage')

const SEAT_SELECTION_IDENTIFIER = ''

class SeatSelectionPage extends BasePage {
  constructor(driver) {
    super(driver, SEAT_SELECTION_IDENTIFIER)
  }
}

module.exports = SeatSelectionPage
