import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'
import {
    common,
    loginPage
} from '../locators'

export default class LoginPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    loginForm = async () => this.page.locator(loginPage.loginFormCss)
    emailField = async () => this.page.locator(loginPage.emailFieldId)
    passwordField = async () => this.page.locator(loginPage.passwordFieldId)
    loginLnk = async () => this.page.locator(loginPage.loginLnkCss)
    errorMessageWarning = async () => this.page.locator(common.errorMessageWarningCss)

    async checkLoginForm() {
        const ele = await this.loginForm()

        try {
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error(`checkLoginForm step failed: ${error}`)
        }
    }

    async setEmail(username: string) {
        const ele = await this.emailField()

        try {
            await ele?.fill(username)
        } catch (error) {
            throw new Error(`setEmail step failed: ${error}`)
        }
    }

    async setPassword(password: string) {
        const ele = await this.passwordField()

        try {
            await ele?.fill(password)
        } catch (error) {
            throw new Error(`setPassword step failed: ${error}`)
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

    async checkErrorMessage(message: string) {
        const ele = await this.errorMessageWarning()

        try {
            await expect(ele).toHaveText(message)
        } catch (error) {
            throw new Error(`checkErrorMessage step failed: ${error}`)
        }
    }
}