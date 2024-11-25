import { setWorldConstructor } from '@cucumber/cucumber'
import { Page } from 'playwright'

class CustomWorld {
    page!: Page
}

setWorldConstructor(CustomWorld)