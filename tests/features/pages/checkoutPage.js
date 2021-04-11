'use strict'

const BasePage = require('./basePage')

const CHECKOUT_IDENTIFIER = ''

class CheckoutPage extends BasePage {
  constructor(driver) {
    super(driver, CHECKOUT_IDENTIFIER)
  }
}

module.exports = CheckoutPage
