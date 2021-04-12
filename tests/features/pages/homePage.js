'use strict'

const { Key } = require('selenium-webdriver')
const BasePage = require('./basePage')

const ACCEPT_COOKIES_BUTTON = 'cookie-popup-with-overlay__button'
const SEARCH_IDENTIFIER = 'search-widget__content'
const PAGE_DEPARTURE_TEXTBOX = 'input-button__departure'
const PAGE_DESTINATION_TEXTBOX = 'input-button__destination'
const DATE_FROM_BUTTON = 'ng-trigger-datesFromTripTypeChange'
const DATE_TO_BUTTON = 'ng-trigger-smoothPickerAppear'
const TERMS_CHECKBOX = '_background'
const SEARCH_BUTTON = 'flight-search-widget__start-search'
const PASSENGER_BUTTON = 'flight-widget-controls__control--passengers'

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

  async getDateFromButton() {
    return await this.findElementByClass(DATE_FROM_BUTTON)
  }

  async getDateToButton() {
    return await this.findElementByClass(DATE_TO_BUTTON)
  }

  async getTermsCheckbox() {
    return await this.findElementByClass(TERMS_CHECKBOX)
  }

  async getSearchButton() {
    return await this.findElementByClass(SEARCH_BUTTON)
  }

  async getPassengerButton() {
    return await this.findElementByClass(PASSENGER_BUTTON)
  }

  async acceptTerms() {
    const terms = await this.getTermsCheckbox()
    terms.click()
  }

  async enterFromDate(fromDateText) {
    const fromDateButton = await this.getDateFromButton()
    fromDateButton.click()
    const getSelectableDate = await this.findElementByXPath(
      `//*[@data-id='${fromDateText}']`
    )
    getSelectableDate.click()
  }

  async enterToDate(toDateText) {
    const toDateButton = await this.getDateToButton()
    toDateButton.click()
    const getSelectableDate = await this.findElementByXPath(
      `//*[@data-id='${toDateText}']`
    )
    getSelectableDate.click()
  }

  async enterPassengers(adults, children) {
    const passengerButton = await this.getPassengerButton()
    passengerButton.click()
    const getIncrements = await this.findElementsByXPath(
      '//*[@data-ref="counter.counter__increment"]'
    )
    for (let index = 1; index < adults; index++) {
      getIncrements[0].click()
    }
    for (let index = 0; index < children; index++) {
      getIncrements[2].click()
    }
  }

  async search() {
    const searchButton = await this.getSearchButton()
    searchButton.click()
  }

  async enterDeparture(departureText) {
    const departure = await this.getDepartureTextbox()
    departure.click()
    departure.clear()
    departure.sendKeys(departureText)
  }

  async enterDestination(destinationText) {
    const destination = await this.getDestinationTextbox()
    destination.click()
    destination.clear()
    destination.sendKeys(destinationText)
    destination.sendKeys(Key.ENTER)
  }
}

module.exports = HomePage
