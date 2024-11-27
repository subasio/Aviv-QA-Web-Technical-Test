import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'
import { registrationPage } from '../locators'
import logger from '../../../utils/logger'

export default class RegistrationPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    registrationForm = async () => this.page.locator(registrationPage.titleXpath)
    firstNameField = async () => this.page.locator(registrationPage.firstNameFieldId)
    lastNameField = async () => this.page.locator(registrationPage.lastNameFieldId)
    emailField = async () => this.page.locator(registrationPage.emailFieldId)
    passwordField = async () => this.page.locator(registrationPage.passwordFieldId)
    confirmPasswordField = async () => this.page.locator(registrationPage.confirmPasswordFieldId)
    registrationBtn = async () => this.page.locator(registrationPage.registrationBtnId)
    firstNameErrorMsg = async () => this.page.locator(registrationPage.firstNameErrMsgId)
    lastNameErrorMsg = async () => this.page.locator(registrationPage.lastNameErrMsgId)
    emailErrorMsg = async () => this.page.locator(registrationPage.emailErrMsgId)
    passwordErrorMsg = async () => this.page.locator(registrationPage.passwordErrMsgId)
    registrationSuccessMsg = async () => this.page.locator(registrationPage.registrationSuccessMsgXpath)
    continueBtn = async () => this.page.locator(registrationPage.continueBtnCss)

    async checkRegistrationForm() {
        const ele = await this.registrationForm()

        try {
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error(`checkRegistrationForm step failed: ${error}`)
        }
    }

    async setFirstName(firstname: string) {
        const ele = await this.firstNameField()

        try {
            await ele?.fill(firstname)
        } catch (error) {
            throw new Error(`setFirstName step failed: ${error}`)
        }
    }

    async setLastName(lastName: string) {
        const ele = await this.lastNameField()

        try {
            await ele?.fill(lastName)
        } catch (error) {
            throw new Error(`setLastName step failed: ${error}`)
        }
    }

    async setEmail(email: string) {
        const ele = await this.emailField()

        try {
            await ele?.fill(email)
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

    async setConfirmPassword(password: string) {
        const ele = await this.confirmPasswordField()

        try {
            await ele?.fill(password)
        } catch (error) {
            throw new Error(`setConfirmPassword step failed: ${error}`)
        }
    }

    async clickRegistrationBtn() {
        const ele = await this.registrationBtn()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickRegistrationBtn step failed: ${error}`)
        }
    }

    async checkRegistrationSuccessMessage() {
        const ele = await this.registrationSuccessMsg()

        try {
            logger.info('User successfully registered.')
            return await ele?.textContent()
        } catch (error) {
            throw new Error(`checkRegistrationSuccessMessage step failed: ${error}`)
        }
    }

    async clickContinueBtn() {
        const ele = await this.continueBtn()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickContinueBtn step failed: ${error}`)
        }
    }

    async checkErrorMessage(message: string) {
        try {
            switch (message) {
                case 'First name is required.': {
                await expect(await this.firstNameErrorMsg()).toHaveText(message)
                break
                }
                case 'Last name is required.':
                await expect(await this.lastNameErrorMsg()).toHaveText(message)
                break
                case 'Email is required.':
                case 'Please enter a valid email address.':
                await expect(await this.emailErrorMsg()).toHaveText(message)
                break
                case 'Password is required.':
                case 'The password and confirmation password do not match.':
                await expect(await this.passwordErrorMsg()).toHaveText(message)
                break
                default:
                throw new Error('Unknown message type');
            }
        } catch (error) {
            throw new Error(`checkErrorMessage step failed: ${error}`)
        }
    }
}