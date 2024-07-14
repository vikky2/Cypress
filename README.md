Cypress:
Cypress is a next generation front end testing tool built for the modern web. Cypress is a JavaScript-based end-to-end testing tool designed for modern web test automation.
Here is the home page for Cypress if someone wants to look it up
    https://www.cypress.io/
      Key Features of Cypress:-
1. Easy Setup: Cypress can be installed with a single command and requires minimal configuration to get started.

2. Real-time Reloads: As you write tests, Cypress automatically reloads and runs them in the browser, providing instant feedback.

3. Time Travel: Cypress takes snapshots as your tests run, allowing you to hover over each command in the command log and see the state of the application at that point.

4. Automatic Waiting: Cypress automatically waits for commands and assertions to pass, eliminating the need for manual waits or sleeps.

5. Robust Debugging: Cypress provides detailed error messages and stack traces, making it easier to identify and fix issues in your tests.

6. Network Traffic Control: You can stub and intercept network requests using cy.intercept(), allowing for testing under various conditions.

7. Custom Commands: You can create reusable custom commands to simplify and reduce duplication in your tests.

8. Cross-Browser Testing: Cypress supports running tests in multiple browsers, including Chrome, Firefox, and Edge.

9. Screenshots and Videos: Cypress can automatically take screenshots and record videos of your test runs, which is useful for debugging and reporting.

10. CI/CD Integration: Cypress easily integrates with popular CI/CD services like Jenkins, CircleCI, and GitHub Actions, enabling automated testing in your development workflow.

11. Plugins and Extensions: The Cypress ecosystem includes many plugins and extensions that enhance its functionality, from visual testing to code coverage.
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

Important Notes: 
All Cypress scripts can be found under the e2e folder here.  https://github.com/vikky2/Cypress/tree/main/cypress/e2e



