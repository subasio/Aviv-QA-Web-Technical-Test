import { setWorldConstructor } from '@cucumber/cucumber'
import { BrowserContext, Page } from 'playwright'

class CustomWorld {
    context!: BrowserContext
    page!: Page
}

setWorldConstructor(CustomWorld)