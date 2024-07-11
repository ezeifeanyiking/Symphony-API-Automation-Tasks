# Symphony-API-Automation-Tasks

This project contains API tests for "https://api.publicapis.org/entries"

## About the project

API Test should do the following:

1. Call https://api.publicapis.org/entries
2. Read the response, find all objects with property “Category: Authentication and
   Authorization”
3. Compare, count, and verify the number of objects where the property above
   appears
4. Finally print found objects to console

## Getting Started

1. Clone the repository
2. Open in your choice IDE, prefarably Visual Studio code (Vs Code)
3. Run "npm install" to install dependencies

## Running the Tests

Run "npm run test"

---

# Symphony-UI-Automation-Tasks

This project contains API tests for "https://api.publicapis.org/entries"

## About the project

Create (design and implement) an automated UI test using any any UI JS framework or
library (Cypress with JavaScript; Playwright with TypeScript, WebdriverIO, etc.)

UI Test should do the following:

1. Go to https://www.saucedemo.com/
2. Log in to the site. Verify that the items are sorted by Name ( A -> Z ).
3. Change the sorting to Name ( Z -> A).
4. Verify that the items are sorted correctly.

## Getting Started

1. Clone the repository
2. Open in your choice IDE, prefarably Visual Studio code (Vs Code)
3. Run "npm install" to install dependencies

## Running the Tests

Run "npx cypress open"
