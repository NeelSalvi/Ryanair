'use strict'

const BasePage = require('./basePage')

const ACCEPT_COOKIES_BUTTON = 'cookie-popup-with-overlay__button'
const SEARCH_IDENTIFIER = 'search-widget__content'
const PAGE_DEPARTURE_TEXTBOX = 'input-button__departure'
const PAGE_DESTINATION_TEXTBOX = 'input-button__destination'
const PAGE_LOGIN_BUTTON = '#signInButtonId'
const PAGE_LOGIN_HEADER = '#login-header'
const PAGE_EMAIL_LABEL = '#email-label'
const PAGE_PASSWORD_LABEL = '#password-label'

class HomePage extends BasePage {
  constructor(driver) {
    super(driver, SEARCH_IDENTIFIER)
  }

  async isPageLoaded() {
    return await this.exists()
  }

  async acceptCookies() {
    let acceptAllButton = await this.findElementByClass(ACCEPT_COOKIES_BUTTON)
    acceptAllButton.click()
  }

  async getDepartureTextbox() {
    return await this.findElementById(PAGE_DEPARTURE_TEXTBOX)
  }

  async getDestinationTextbox() {
    return await this.findElementById(PAGE_DESTINATION_TEXTBOX)
  }

  async getSearchButton() {
    return await this.findElementById(PAGE_LOGIN_BUTTON)
  }

  async search() {
    let loginButton = await this.findElementByCss(PAGE_LOGIN_BUTTON)
    loginButton.click()
  }

  async getLoginHeader() {
    return await this.findElementByCss(PAGE_LOGIN_HEADER)
  }

  async getEmailLabel() {
    return await this.findElementByCss(PAGE_EMAIL_LABEL)
  }

  async getPasswordLabel() {
    return await this.findElementByCss(PAGE_PASSWORD_LABEL)
  }

  async enterDeparture(departureText) {
    const departure = await this.getDepartureTextbox()
    departure.click()
    // setTimeout(1000)
    // departure.clear()
    // departure.sendKeys(departureText)
  }

  async enterDestination(destinationText) {
    const destination = await this.getDestinationTextbox()
    destination.click()
    // destination.clear()
    // destination.sendKeys(destinationText)
  }
}

module.exports = HomePage
