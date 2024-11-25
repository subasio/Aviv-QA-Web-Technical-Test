import { Before, After } from '@cucumber/cucumber'
import { TestStepResultStatus } from '@cucumber/messages'
import { chromium, firefox, webkit, Browser, Page } from 'playwright'
import { GLOBALS } from '../test-set-up'

let browser: Browser
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
            value: "aIgv1hzlLYeruzgIwZJF790je0ZSP_0mO9uUw4hr_ag-1732540770-1.2.1.1-j0LtMRIn.AOACXFRBr08XLnVV_hML8ld7uPnDQG5alsmGJH_0HstBMNac50IBt75h1jdbGrAMKjmX3OsY1OsibYmtg082M2iV6ZWeGR4b1jcQR.qp7N_P51aKNm2bBpP9OvaYPs9PDBxwvbatmZeTwptXfoFurJlxzWYAuDsK5YXH9xFJ7X9XDGR_9xb4Y4E8hZMyEHb.Ndc2xklKStF9jJgfNF.vsAvPLLZgz6jdhzgvr1oW4giFtAWUPccXWJopYIj7bbwIP4IsK6cfZUtfa8StflQAwIuF3x.2m9QspXcO6WyKYOLT4qIaOvIO87nzn0tmC_mPig_qTFt3C8HxtEl9PKpBE3O6yB_r.is5mpgFhF47FPc8dnEvRq2Z2EbII5q9rLgJF8S_McD6uRuLeSpBtHxeAyZD.Rum3SFdcE",
            domain: '.nopcommerce.com',
            path: '/',
            httpOnly: true,
            secure: true
        }

        // Add the cookie to the browser context.
        await context.addCookies([cfClearanceCookie])
        this.page = page
        await page.goto(GLOBALS.env.URL)
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
        if (browser) await browser.close()
    }
})