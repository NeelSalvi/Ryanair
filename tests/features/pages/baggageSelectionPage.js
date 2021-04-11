'use strict'

const BasePage = require('./basePage')

const BAGGAGE_SELECTION_IDENTIFIER = ''

class BaggageSelectionPage extends BasePage {
  constructor(driver) {
    super(driver, BAGGAGE_SELECTION_IDENTIFIER)
  }
}

module.exports = BaggageSelectionPage
