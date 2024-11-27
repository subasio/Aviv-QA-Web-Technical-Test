import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'
import { common, shoppingCartPage } from '../locators'
import logger from '../../../utils/logger'

export default class ShoppingCartPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    shoppingCartTitle = async () => this.page.locator(shoppingCartPage.titleXpath)
    shoppingCartItems = async () => this.page.locator(common.cartItemsXpath)
    termsOfServiceCheckBox = async () => this.page.locator(shoppingCartPage.termsOfServiceCheckBoxId)
    checkoutBtn = async () => this.page.locator(shoppingCartPage.checkoutBtnId)
    orderTotal = async () => this.page.locator(shoppingCartPage.orderTotalXpath)
    
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

    async shoppingCartItemNameCheck(itemName: string) {
        const itemsList = this.page.locator(`//td[@class='product']//a[contains(text(), '${itemName}')]`)

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

    async shoppingCartItemNameAndQuantityCheck(itemName: string, quantity: string) {
        const ele = this.page.locator(`//td[@class='product']
            //a[contains(text(), '${itemName}')]/../..//*[@class='${quantity}']`)

        try {
            await expect(ele).toBeVisible()
            logger.info(`Item ${itemName} with ${quantity} present in the shopping cart.`)
        } catch (error) {
            throw new Error(`shoppingCartItemNameAndQuantityCheck step failed: ${error}`)
        }
    }

    async clickShoppingCartItemQuantityUpBtn(itemName: string) {
        const ele = this.page.locator(`//td[@class='product']
            //a[contains(text(), '${itemName}')]/../..//*[@class='quantity up']`)

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickShoppingCartItemQuantityUpBtn step failed: ${error}`)
        }
    }

    async shoppingCartProductSubTotal(itemName: string, subtotal: string) {
        const ele = this.page.locator(`//td[@class='product']
            //a[contains(text(), '${itemName}')]/../..//*[@class='product-subtotal']`)

        try {
            await expect(ele).toHaveText(subtotal)
        } catch (error) {
            throw new Error(`shoppingCartProductSubTotal step failed: ${error}`)
        }
    }

    async shoppingCartTotal(total: string) {
        const ele = await this.orderTotal()

        try {
            await expect(ele).toHaveText(total)
        } catch (error) {
            throw new Error(`shoppingCartTotal step failed: ${error}`)
        }
    }

    async removeItemFromShoppingCart(itemName: string) {
        const ele = this.page.locator(`//td[@class='product']
            //a[contains(text(), '${itemName}')]/../..//*[@class='remove-btn']`)

        try {
            logger.info(`Item ${itemName} removed from shopping cart.`)
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error(`removeItemFromShoppingCart step failed: ${error}`)
        }
    }

    async itemNotPresentInTheShoppingCartCheck(itemName: string) {
        const itemsList = this.page.locator(`//td[@class='product']//a[contains(text(), '${itemName}')]`)

        try {
            logger.info(`Item ${itemName} not present in the shopping cart.`)
            await expect(itemsList).toBeHidden()
        } catch (error) {
            throw new Error(`itemNotPresentInTheShoppingCartCheck step failed: ${error}`)
        }
    }
}