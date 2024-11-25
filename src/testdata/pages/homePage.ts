import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'
import { homePage, notificationBar } from '../locators'
import logger from '../../../utils/logger'

export default class HomePage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    loginLnk = async () => this.page.locator(homePage.loginLnkCss)
    logoutLnk = async () => this.page.locator(homePage.logoutLnkCss)
    myAccountLnk = async () => this.page.locator(homePage.myAccountLnkCss)
    registrationLnk = async () => this.page.locator(homePage.registrationLnkCss)
    booksLinkLnk = async () => this.page.locator(homePage.booksLinkCss)
    shoppingCartLnk = async () => this.page.locator(homePage.shoppingCartLnkCss)
    shoppingCartLnkCount = async () => this.page.locator(homePage.shoppingCartLnkItemCountXpath)
    notificationPopUpBarMsg = async () => this.page.locator(notificationBar.barCss)
    notificationPopUpBarCloseBtn = async () => this.page.locator(notificationBar.closeCss)

    async checkHomePageNotLoggedInDisplayed() {
        const ele = await this.loginLnk()
        const ele1 = await this.registrationLnk()
        const ele2 = await this.logoutLnk()
        const ele3 = await this.myAccountLnk()

        try {
            await expect(ele).toBeVisible()
            await expect(ele1).toBeVisible()
            await expect(ele2).toBeHidden()
            await expect(ele3).toBeHidden()
        } catch (error) {
            throw new Error(`checkHomePageNotLoggedInDisplayed step failed: ${error}`)
        }
    }

    async checkHomePageLoggedInDisplayed(): Promise<boolean> {
        const ele = await this.loginLnk()
        const ele1 = await this.registrationLnk()
        const ele2 = await this.logoutLnk()
        const ele3 = await this.myAccountLnk()

        try {
            await expect(ele).toBeHidden()
            await expect(ele1).toBeHidden()
            await expect(ele2).toBeVisible()
            await expect(ele3).toBeVisible()
            return true
        } catch (error) {
            logger.error(`checkHomePageLoggedInDisplayed step failed: ${error}`)
            return false
        }
    }

    async clickLoginLink() {
        const ele = await this.loginLnk()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickLoginLink step failed: ${error}`)
        }
    }

    async clickRegistrationLink() {
        const ele = await this.registrationLnk()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickRegistrationLink step failed: ${error}`)
        }
    }

    async clickBooksLink() {
        const ele = await this.booksLinkLnk()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickBooksLink step failed: ${error}`)
        }
    }

    async clickShoppingCartLink() {
        const ele = await this.shoppingCartLnk()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickShoppingCartLink step failed: ${error}`)
        }
    }

    async clickLogoutLnk() {
        const isLoggedIn = await this.checkHomePageLoggedInDisplayed()
        const ele = await this.logoutLnk()

        try {
            if (isLoggedIn) {
            await ele?.click()
            }
        } catch (error) {
            throw new Error(`clickLogoutLnk step failed: ${error}`)
        }
    }

    async checkNotificationPopUpBarMsg() {
        const ele = await this.notificationPopUpBarMsg()

        try {
            await expect (ele).toHaveText('The product has been added to your shopping cart')
        } catch (error) {
            throw new Error(`checkNotificationPopUpBarMsg step failed: ${error}`)
        }
    }

    async clickNotificationPopUpBarClose() {
        const ele = await this.notificationPopUpBarCloseBtn()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickNotificationPopUpBarClose step failed: ${error}`)
        }
    }

    async shoppingCartLinkItemCountCheck(count: number) {
        const ele = await this.shoppingCartLnkCount()

        try {
            expect(parseInt(await ele?.textContent() as string)).toEqual(count)
        } catch (error) {
            throw new Error(`shoppingCartLinkItemCountCheck step failed: ${error}`)
        }
    }
}