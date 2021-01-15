/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on) => {
  require('cypress-terminal-report/src/installLogsPrinter')(on)
}
