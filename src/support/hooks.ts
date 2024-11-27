import { Before,After, setDefaultTimeout } from '@cucumber/cucumber'
import { TestStepResultStatus } from '@cucumber/messages'
import { chromium, firefox, webkit, Browser, BrowserContext, Page } from 'playwright'
import { GLOBALS } from '../test-set-up'
import { decrypt } from '../../utils/crypto'
import path from 'path'
import fs from 'fs'

setDefaultTimeout(30000)

let browser: Browser
let context: BrowserContext
let page: Page

Before(async function () {
    try {
        const browserType = GLOBALS.env.BROWSER
        let browserFactory

        if (browserType === 'firefox') {
            browserFactory = firefox
        } else if (browserType === 'webkit') {
            browserFactory = webkit
        } else {
            browserFactory = chromium
        }

        browser = await browserFactory.launch({ headless: false })
        const context = await browser.newContext()
        page = await context.newPage()
        await page.setViewportSize({ width: 1920, height: 1080 })
        const cfClearanceCookie = {
            name: 'cf_clearance',
            value: decrypt(GLOBALS.env.CF_CLEARANCE),
            domain: '.nopcommerce.com',
            path: '/',
            httpOnly: true,
            secure: true
        }

        // Add the cookie to the browser context.
        await context.addCookies([cfClearanceCookie])
        await page.goto(GLOBALS.env.URL)

        this.context = context
        this.page = page
    } catch (error) {
        throw new Error(`Error during opening home URL: ${error}`)
    }
})

After(async function (scenario) {
    try {
        // Check if the scenario failed
        if (scenario.result?.status === TestStepResultStatus.FAILED) {
            // Capture a screenshot when a test fails
            const screenshotPath = path.join(__dirname, `../../allure-results/${scenario.pickle.name.replace(/\s+/g, '_')}.png`)
            await page.screenshot({ path: screenshotPath })

            // Attach the screenshot to Allure report
            this.attach(fs.readFileSync(screenshotPath), 'image/png')
        }
    } catch (error) {
        throw new Error(`Error in after hook: ${error}`)
    } finally {
        if (page) await page.close()
        if (context) await context.close()
        if (browser) await browser.close()
    }
})