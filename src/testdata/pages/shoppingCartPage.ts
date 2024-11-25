import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'
import { shoppingCartPage } from '../locators'

export default class ShoppingCartPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    shoppingCartTitle = async () => this.page.locator(shoppingCartPage.titleXpath)
    shoppingCartItems = async () => this.page.locator(shoppingCartPage.cartItemsXpath)
    termsOfServiceCheckBox = async () => this.page.locator(shoppingCartPage.termsOfServiceCheckBoxId)
    checkoutBtn = async () => this.page.locator(shoppingCartPage.checkoutBtnId)
    
    async checkShoppingCartTitle() {
        const ele = await this.shoppingCartTitle()

        try {
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error(`checkShoppingCartTitle step failed: ${error}`)
        }
    }

    async shoppingCartItemsCountCheck(count: number) {
        const list = await this.shoppingCartItems()

        try {
            await expect(list).toHaveCount(count)
        } catch (error) {
            throw new Error(`shoppingCartItemsCountCheck step failed: ${error}`)
        }
    }

    async shoppingCartItemNameCheck(expectedItemName: string) {
        const itemsList = this.page.locator(`td[@class='product']//a[contains(text(), '${expectedItemName}')]`)

        try {
            await expect(itemsList).toBeVisible()
        } catch (error) {
            throw new Error(`shoppingCartItemNameCheck step failed: ${error}`)
        }
    }

    async clickTermsOfServiceCheckbox() {
        const ele = await this.termsOfServiceCheckBox()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickTermsOfServiceCheckbox step failed: ${error}`)
        }
    }

    async clickCheckoutBtn() {
        const ele = await this.checkoutBtn()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickCheckoutBtn step failed: ${error}`)
        }
    }
}