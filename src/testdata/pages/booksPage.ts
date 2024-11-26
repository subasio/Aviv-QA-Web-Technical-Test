import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'
import { booksPage } from '../locators'

export default class BooksPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    booksTitle = async () => this.page.locator(booksPage.titleXpath)
    
    async checkBooksTitle() {
        const ele = await this.booksTitle()

        try {
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error(`checkBooksTitle step failed: ${error}`)
        }
    }

    async addProductToCartBtn(product: string) {
        const ele = this.page.locator(`//h2[@class='product-title']//a[contains(text(), '${product}')]
            /../..//button[@class='button-2 product-box-add-to-cart-button']`)

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`addProductToCartBtn step failed: ${error}`)
        }
    }
}