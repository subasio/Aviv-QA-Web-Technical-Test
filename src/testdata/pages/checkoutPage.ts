import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'
import { checkoutPage } from '../locators'
import logger from '../../../utils/logger'

export default class CheckoutPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    checkoutTitle = async () => this.page.locator(checkoutPage.titleXpath)
    selectCountryDropdown = async () => this.page.locator(checkoutPage.selectCountryDropdownId)
    selectStateDropdown = async () => this.page.locator(checkoutPage.selectStateDropdownId)
    city = async () => this.page.locator(checkoutPage.cityFieldId)
    address1 = async () => this.page.locator(checkoutPage.address1FieldId)
    postalCode = async () => this.page.locator(checkoutPage.postalCodeFieldId)
    phoneNumber = async () => this.page.locator(checkoutPage.phoneNumberFieldId)
    billingContinueBtn = async () => this.page.locator(checkoutPage.billingContinueBtnXpath)
    billingAddressStep = async () => this.page.locator(checkoutPage.billingAddressStepId)
    shippingAddressStep = async () => this.page.locator(checkoutPage.shippingAddressStepId)
    shippingMethodStep = async () => this.page.locator(checkoutPage.shippingMethodStepId)
    paymentMethodStep = async () => this.page.locator(checkoutPage.paymentMethodStepId)
    paymentInfoStep = async () => this.page.locator(checkoutPage.paymentInfoStepId)
    confirmOrderStep = async () => this.page.locator(checkoutPage.confirmOrderStepId)
    groundShippingPaymentMethodRadioBtn = async () => this.page.locator(checkoutPage.groundShippingMethodRadioBtnId)
    shippingMethodContinueBtn = async () => this.page.locator(checkoutPage.shippingMethodContinueBtnXpath)
    
    async checkCheckoutTitle() {
        const ele = await this.checkoutTitle()

        try {
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error(`checkCheckoutTitle step failed: ${error}`)
        }
    }

    async checkCheckoutProcesses(): Promise<boolean> {
        const ele = await this.billingAddressStep()
        const ele1 = await this.shippingAddressStep()
        const ele2 = await this.shippingMethodStep()
        const ele3 = await this.paymentMethodStep()
        const ele4 = await this.paymentInfoStep()
        const ele5 = await this.confirmOrderStep()

        try {
            await expect(ele).toBeVisible()
            await expect(ele1).toBeVisible()
            await expect(ele2).toBeVisible()
            await expect(ele3).toBeVisible()
            await expect(ele4).toBeVisible()
            await expect(ele5).toBeVisible()
            return true
        } catch (error) {
            logger.error(`checkCheckoutProcesses step failed: ${error}`)
            return false
        }
    }

    async selectCountryDropdownOption(country: string) {
        const ele = await this.selectCountryDropdown()

        try {
            await ele.selectOption({value: country})
        } catch (error) {
            throw new Error(`selectCountryDropdownOption step failed: ${error}`)
        }
    }

    async selectStateDropdownOption(state: string) {
        const ele = await this.selectStateDropdown()

        try {
            await ele.selectOption({value: state})
        } catch (error) {
            throw new Error(`selectStateDropdownOption step failed: ${error}`)
        }
    }

    async setCity(city: string) {
        const ele = await this.city()

        try {
            await ele?.fill(city)
        } catch (error) {
            throw new Error(`setCity step failed: ${error}`)
        }
    }

    async setAddress1(adddress1: string) {
        const ele = await this.address1()

        try {
            await ele?.fill(adddress1)
        } catch (error) {
            throw new Error(`setAddress1 step failed: ${error}`)
        }
    }

    async setPostalCode(postalCode: string) {
        const ele = await this.address1()

        try {
            await ele?.fill(postalCode)
        } catch (error) {
            throw new Error(`setPostalCode step failed: ${error}`)
        }
    }

    async setPhoneNumber(phoneNumber: string) {
        const ele = await this.address1()

        try {
            await ele?.fill(phoneNumber)
        } catch (error) {
            throw new Error(`setPhoneNumber step failed: ${error}`)
        }
    }

    async clickContinueBillingBtn() {
        const ele = await this.billingContinueBtn()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickContinueBillingBtn step failed: ${error}`)
        }
    }

    async checkGroundShippingPaymentMethodRadioBtnChecked(): Promise<boolean> {
        const ele = await this.groundShippingPaymentMethodRadioBtn()

        try {
            const isChecked = await ele.isChecked()

            if (isChecked) {
                return true
            }
        } catch (error) {
            throw new Error(`checkGroundShippingPaymentMethodRadioBtnChecked step failed: ${error}`)
        }
        return false
    }

    async clickContinueShippingMethodBtn() {
        const ele = await this.billingContinueBtn()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickContinueShippingMethodBtn step failed: ${error}`)
        }
    }
}