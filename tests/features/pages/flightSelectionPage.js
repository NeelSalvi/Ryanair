'use strict'
const { By } = require('selenium-webdriver')

const BasePage = require('./basePage')

const FLIGHT_SELECTION_IDENTIFIER = 'card-wrapper'
const FLIGHT_SELECTION_CARDS = 'card-wrapper'
const FLIGHT_FARE_CARDS = 'fare-card--selected'
const FLIGHT_FARE_OUTBOUND_CARDS =
  '//*[@data-e2e="flight-card--outbound"]//*[@data-e2e="fare-card--standard"]'
const FLIGHT_FARE_INBOUND_CARDS =
  '//*[@data-e2e="flight-card--inbound"]//*[@data-e2e="fare-card--standard"]'
const LOGIN_POPUP_BUTTON = 'login-touchpoint__login-button'
const USERNAME_TEXTBOX = '//*[@placeholder="email@email.com"]'
const PASSWORD_TEXTBOX = '//*[@placeholder="Password"]'
const LOGIN_SUBMIT_BUTTON = '//*[@type="submit"]'
const TITLE_DROPDOWN_TOGGLE_BUTTON = 'dropdown__toggle'
const CONTINUE_BUTTON = 'continue-flow__button'

class FlightSelectionPage extends BasePage {
  constructor(driver) {
    super(driver, FLIGHT_SELECTION_IDENTIFIER)
  }

  async getFlightSelectionCards() {
    return await this.findElementsByClass(FLIGHT_SELECTION_CARDS)
  }

  async getFlightFareCards() {
    return await this.findElementsByXPath(FLIGHT_FARE_CARDS)
  }

  async getFlightFareOutboundCard() {
    return await this.findElementByXPath(FLIGHT_FARE_OUTBOUND_CARDS)
  }

  async getFlightFareInboundCard() {
    return await this.findElementByXPath(FLIGHT_FARE_INBOUND_CARDS)
  }

  async getLoginPopupButton() {
    return await this.findElementByClass(LOGIN_POPUP_BUTTON)
  }

  async getUsernameTextbox() {
    return await this.findElementByXPath(USERNAME_TEXTBOX)
  }
  async getPasswordTextbox() {
    return await this.findElementByXPath(PASSWORD_TEXTBOX)
  }

  async getLoginButton() {
    return await this.findElementByXPath(LOGIN_SUBMIT_BUTTON)
  }

  async getTitleDropdownButtons() {
    return await this.findElementsByClass(TITLE_DROPDOWN_TOGGLE_BUTTON)
  }

  async getContinueButton() {
    return await this.findElementByClass(CONTINUE_BUTTON)
  }

  async selectFlightFareValue() {
    const flightSelectionCards = await this.getFlightSelectionCards()
    flightSelectionCards[0].click()
    const fareCardsOutbound = await this.getFlightFareOutboundCard()
    fareCardsOutbound.click()
    flightSelectionCards[1].click()
    const fareCardsInbound = await this.getFlightFareInboundCard()
    fareCardsInbound.click()
  }

  async login() {
    const loginPopup = await this.getLoginPopupButton()
    loginPopup.click()
    const username = await this.getUsernameTextbox()
    username.sendKeys('neel.salvi@gmail.com')
    const pasword = await this.getPasswordTextbox()
    pasword.sendKeys('Shmsmvm@1981')
    const loginSubmit = await this.getLoginButton()
    loginSubmit.click()
  }

  async fillPassengerDetails(passengerData) {
    console.log(passengerData)
    const titleDropdownButtons = await this.getTitleDropdownButtons()
    let adultIndex = 0
    let childIndex = 0
    for (let index = 0; index < passengerData.length; index++) {
      if (passengerData[index].title !== '') {
        titleDropdownButtons[adultIndex].click()
        const titleSelection = await this.findElementByXPath(
          `//div[.='${passengerData[index].title}' and @class="dropdown-item__content"]`
        )
        titleSelection.click()
        const aFirstName = await this.findElementByName(
          `formState.passengers.ADT-${adultIndex}.name`
        )
        aFirstName.sendKeys(passengerData[index].firstName)
        const aLastName = await this.findElementByName(
          `formState.passengers.ADT-${adultIndex}.surname`
        )
        aLastName.sendKeys(passengerData[index].lastName)
        adultIndex++
      } else {
        const cFirstName = await this.findElementByName(
          `formState.passengers.CHD-${childIndex}.name`
        )
        cFirstName.sendKeys(passengerData[index].firstName)
        const cLastName = await this.findElementByName(
          `formState.passengers.CHD-${childIndex}.surname`
        )
        cLastName.sendKeys(passengerData[index].lastName)
        childIndex++
      }
    }
    const continueButton = await this.getContinueButton()
    continueButton.click()
  }
}

module.exports = FlightSelectionPage
