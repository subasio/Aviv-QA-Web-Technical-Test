# Project description
  BDD automation testing framework using JS/TS with official [Playwright](https://playwright.dev/) and [Cucumber](https://cucumber.io/).\
  Project is automation of the [nopCommerce](https://demo.nopcommerce.com/) web app for 
  [Aviv-QA-Web-Technical-Test](https://github.com/Aviv-public/Aviv-QA-Web-Technical-Test) using page object model design pattern,
  support for cross browser testing, parameterization, enviromental configurations, parallel testing and 
  in-depth [Allure reports](https://qameta.io/allure-report/) with screenshots for failed tests.\
  Encryption is also implemented for handling of sensistive data such as emails, passwords, etc.

## Tech stack used
  * Node.js version 20.18.0
  * Npm version 10.8.2
  * Typescript version 5.4.5
  * Cucumber version 11.1.0
  * Playwright version 1.48.0
  * Allure reports version 3.0.6

## Pre-requisites
  - <a href="https://nodejs.org/en" target="_blank">Node.js</a>

## Set up
  - Install Node.js and set path.
  - Set the **ENCRYPTION_KEY** as your system environment variable with the value of `RGJ3j4moAdemMYuFlc9d5NcBp1RB8GRy`\
  (**DISCLAIMER - this is just for this demo testing purposes, never ever under any circumstances share your private keys publicly!!!**)
  - Clone respective repository or download zip.
  - Acquire the newest `cf_clearance` cookie from browser's dev tools then go to your project directory from powershell or terminal and run the following command to encrypt it: `npm run encrypt -- "<paste cf_clearance cookie value here>"` and then paste the encrypted value in a file here: `./src/test-set-up.ts` under `CF_CLEARANCE => default`

**IMPORTANT NOTE:**\
  If you don't want to mess with separate browser installation just run the `npx playwright install` command in terminal which will then install majority of the playwright browsers needed for testing purposes.

## Running tests
  Go to your project directory from powershell or terminal and run following commands:
  * `npm i` (to install all the required dependencies)
  * `npm test` (default will run on chromium browser)
  * `npm test:firefox` (will run on firefox browser)
  * `npm test:webkit` (will run on webkit browser)

## Reports
  * [Allure reports](https://qameta.io/allure-report/)
    * Go to your project directory from powershell or terminal and just execute command:
      * `allure serve allure-results`
    * After running this command browser will open up with allure reports page where in depth test reports for all of
      the modules and their features/steps can be found (screenshots for the failed tests/steps included).
    * In case you have both [npm](https://www.npmjs.com/) and [maven](https://maven.apache.org/download.cgi) installed
      on your system sometimes there can be a problem when running the `allure serve` command, if that happens please
      run the command `npm install -g allure-commandline --save-dev` and then try again.

## Issues and Challenges
  **Cloudflare bot protection reCaptcha**\
  This was the biggest issue since the web app is heavily protected by the **Cloudflare bot**. I have tried all of the well known ways to workaround it including:
  * injecting complete `.har` file,
  * separate cookies,
  * `user-agent`,
  * `headless` mode,
  * `playwright stealth` combined with `puppeteer-extra-plugin-stealth`
  but nothing of these options worked.

  **Short term workaround**\
  The only option which worked at least for a short period of time was injecting only the `cf_clearance` cookie but since the **Cloudflare bot** is been upgraded constantly with even adding your IP address to his known list of hosts to be blocked this was also only 
  working for a short period    of time, if any at all.
  
  **Recommendation and best practice**\
  Since all of the possible workaround options are only short term or not usefull at all, then for real testing purposes in a **controlled environment** it is recommended to **completely turn off** protection while tesing is in progress.
  Of course leaving the all other possible protections on to still be able to prevent unauthorized use access.
  The best solution to have this protection and still be able to stay protected and test is to use some of the professional and paid products like [ZenRows](https://www.zenrows.com/) which work on a concept of rotating proxies and 
  headless browsers to CAPTCHAs and AI.

  **PLEASE KEEP IN MIND!!!**\
  **I could not finish running and validating all of the tests because of the previously mentioned blocker problem with CLOUDFLARE BOT so there could be tests which are failing.**

## Future Improvements
  There are several areas where the project could be enhanced:
  * **dockerize** the complete project to minimize the need for any manual setup and to make a project accessible to any platform

  * not all of the locators have **ID's** or nice **CSS's** so this should be improved since these two way of locating elements is know to be the most efficient, fastest and less prone to inconsistencies and changes

  * make the project as **dynamic (data wise)** as it could be but since this was time limited task solution there wasn't enough time to dive deep into this subject

  * scenario's have too many steps and for the best practice it is recommended that test scenarios should have 
  **less steps** to make debugging and troubleshooting easier

  * this is maybe out of scope but I would definitely suggest to make this **repository private** to prevent unauthorized access since the entire repository commit and pull request history is available to everyone

  * implement any kind of linter for example [SonarQube](https://www.sonarsource.com/products/sonarlint/) to maintain high quality level of code and to discover issues early

## Bonus points
  1. **Parameterized tests**
    Cucumber Scenario Outlines have been specifically implemented to iterate over the same test with different data sets, allowing for comprehensive test coverage with minimal duplication of code.
  
  2. **Environmental configurations**
    The environmental configuration is completely done through just one file `.env-cmdrc` where all of the desired
    environment configurations can be defined (e.g. **dev**, **staging**, **prod**, etc...)
    Sensitive data is of course **encrypted**.
  
  3. **Parallel test execution**
    To run multithreaded (parallel) tests in a Cucumber project, you can utilize Cucumber's parallel execution capabilities along with Playwright's inherent concurrency support.
    **Current parallel configuration example (inside cucumber.js file):**
    <pre> <code> ```module.exports = { default: common.join(' '), parallel: 1, // Number of parallel workers }``` </code> </pre>
    Edit the `parallel` property to enable multithreading with X workers. This number can be adjusted based on your CPU capacity or test needs.
    The parallel testing works with `Browser Contexts per Worker` principle meaning: 
      * Within each browser instance, a worker may create multiple browser contexts if your tests explicitly require them. However, each worker typically starts fresh with a clean browser context or instance.
      * Creating new contexts (newContext()) instead of new browser instances is more efficient for parallel testing.
