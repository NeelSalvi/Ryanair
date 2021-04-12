const webdriver = require('selenium-webdriver')
const using = webdriver.By
const { until } = require('selenium-webdriver')
const timeouts = require('../support/constants')

class BasePage {
  constructor(driver, selector = '') {
    this.driver = driver
    this.selector = selector
  }

  async findElementByClass(selector) {
    let element = this.driver.wait(
      until.elementLocated(using.className(selector)),
      timeouts.ELEMENT_TIMEOUT.TIMEOUT
    )
    return element
  }

  async findElementsByClass(selector) {
    let elements = this.driver.wait(
      until.elementsLocated(using.className(selector)),
      timeouts.ELEMENT_TIMEOUT.TIMEOUT
    )
    return elements
  }

  // async removeElementsByClass(selector) {
  //   this.driver.wait(until.elementIsNotPresent)
  // this.driver.wait(
  //   () => {
  //     return this.driver
  //       .findElements(using.className(selector))
  //       .then(function (found) {
  //         return found.length === 0
  //       })
  //   },
  //   timeouts.ELEMENT_TIMEOUT.RM_TIMEOUT,
  //   'The element should disappear'
  // )
  // let elements = this.driver.wait(
  //   until.elementsLocated(using.className(selector)),
  //   timeouts.ELEMENT_TIMEOUT.TIMEOUT
  // )
  // return elements
  // }

  // async findElementByClass(selector) {
  //   const elements = await this.driver.findElements(using.className(selector))
  //   return elements[0]
  // }

  async findElementByTag(selector) {
    let elements = this.driver.wait(
      until.elementsLocated(using.tagName(selector)),
      timeouts.ELEMENT_TIMEOUT.TIMEOUT
    )
    return elements[0]
  }

  async findElementByName(selector) {
    let element = this.driver.wait(
      until.elementLocated(using.name(selector)),
      timeouts.ELEMENT_TIMEOUT.TIMEOUT
    )
    return element
  }

  async findElementByXPath(selector) {
    let element = this.driver.wait(
      until.elementLocated(using.xpath(selector)),
      timeouts.ELEMENT_TIMEOUT.TIMEOUT
    )
    return element
  }

  async findElementsByXPath(selector) {
    let elements = this.driver.wait(
      until.elementsLocated(using.xpath(selector)),
      timeouts.ELEMENT_TIMEOUT.TIMEOUT
    )
    return elements
  }

  async findElement() {
    const elements = await this.driver.findElements(using.css(this.selector))
    return elements[0]
  }

  async findElementByCss(selector) {
    const elements = await this.driver.findElements(using.css(selector))
    return elements[0]
  }

  async findElementById(selector) {
    let element = this.driver.wait(
      until.elementLocated(using.id(selector)),
      timeouts.ELEMENT_TIMEOUT.TIMEOUT
    )
    return element
  }

  async exists() {
    const elements = await this.driver.findElements(
      using.className(this.selector)
    )
    return elements.length > 0
  }
}

module.exports = BasePage
