Cypress:
Cypress is a next generation front end testing tool built for the modern web. Cypress is a JavaScript-based end-to-end testing tool designed for modern web test automation.
Here is the home page for Cypress if someone wants to look it up
https://www.cypress.io/
Key Features of Cypress:-
Easy Setup: Cypress can be installed with a single command and requires minimal configuration to get started.

Real-time Reloads: As you write tests, Cypress automatically reloads and runs them in the browser, providing instant feedback.

Time Travel: Cypress takes snapshots as your tests run, allowing you to hover over each command in the command log and see the state of the application at that point.

Automatic Waiting: Cypress automatically waits for commands and assertions to pass, eliminating the need for manual waits or sleeps.

Robust Debugging: Cypress provides detailed error messages and stack traces, making it easier to identify and fix issues in your tests.

Network Traffic Control: You can stub and intercept network requests using cy.intercept(), allowing for testing under various conditions.

Custom Commands: You can create reusable custom commands to simplify and reduce duplication in your tests.

Cross-Browser Testing: Cypress supports running tests in multiple browsers, including Chrome, Firefox, and Edge.

Screenshots and Videos: Cypress can automatically take screenshots and record videos of your test runs, which is useful for debugging and reporting.

CI/CD Integration: Cypress easily integrates with popular CI/CD services like Jenkins, CircleCI, and GitHub Actions, enabling automated testing in your development workflow.

Plugins and Extensions: The Cypress ecosystem includes many plugins and extensions that enhance its functionality, from visual testing to code coverage.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
pre-requisites to install and run the test:
- node js is req. to run cypress test from https://nodejs.org/en/download/prebuilt-installer
  (check node version after installing as "node -v" through the terminal)
- install IDE - Visual Studio Code from here: "https://code.visualstudio.com/download"
  
  Set-up the project in cypress by following:-
- npm init (This will create a package.json)
- install cypress - npm install cypress --save-dev

To open cypress dashboard:
run command- npx cypress open
"This will open the cypress dashboard and run the desired test on desired browser". By default cypress support Electron browser.




