import { Before,After, setDefaultTimeout } from '@cucumber/cucumber'
import { TestStepResultStatus } from '@cucumber/messages'
import { chromium, firefox, webkit, Browser, BrowserContext, Page } from 'playwright'
import { GLOBALS } from '../test-set-up'

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
            value: "TtU82p245dtkCYx.qXzhgvRBmgikAO6qYwbBLgNr7Og-1732641639-1.2.1.1-Hdlwhrdsx3VPS6cFSJy9Q1u1_Kcn88xV9bmZ4q.AINwlnl10FzRWKReoIP7yenRAqvuUHOd.nt53m3B88JJTBv2NcGYUhpwBLRfIt1PCcIrh3nBNDwZeXb6sJbKLZvX6R0uHrStp0Rkcdo6WcHLa7aucN6dH0xyiuVTIKxchDPQfAC1M.IsCf2InTSwqt.QYaKqS2ZguyLdMPllDufknMHVAogp7J88qOGVq6qaoQNqpZEna.MFqCIIw1uUVztsvEBSNzoZ.TmAUdmEdQMxnj3poM3U.7I1wrlDcIdK5LaXcLIiRU8U06ck2vTPA_wwSlMFtfLvyJtQpI8bdmCDRWEkYgAX2quldq0u.DTlle76wfelGh6.r4hTFfMwQdXtMQGiQCh.0LAfiqu2FT2dZnvXmLyzwERAJnmvAwJQvgWg",
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
            // const sanitizedScenarioName = scenario.pickle.name.replace(/[^a-zA-Z0-9_-]/g, '_')
            const screenshotBuffer = await page.screenshot({ fullPage: true })
            
            // Attach the screenshot to the Cucumber report
            this.attach(screenshotBuffer, 'image/png')

            // // Optional: Save the screenshot locally for debugging
            // const screenshotPath = path.resolve(__dirname, `../screenshots/${sanitizedScenarioName}.png`)
            // fs.writeFileSync(screenshotPath, screenshotBuffer)
        }
    } catch (error) {
        throw new Error(`Error in after hook: ${error}`)
    } finally {
        if (page) await page.close()
        if (context) await context.close()
        if (browser) await browser.close()
    }
})