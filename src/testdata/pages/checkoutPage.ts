import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'
import { checkoutPage, common } from '../locators'
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
    groundShippingRadioBtn = async () => this.page.locator(checkoutPage.groundShippingRadioBtnId)
    shippingMethodContinueBtn = async () => this.page.locator(checkoutPage.shippingMethodContinueBtnXpath)
    paymentMethodCheckRadioBtn = async () => this.page.locator(checkoutPage.paymentMethodCheckRadioBtnId)
    paymentMethodContinueBtn = async () => this.page.locator(checkoutPage.paymentMethodContinueBtnXpath)
    paymentInfoContinueBtn = async () => this.page.locator(checkoutPage.paymentInfoContinueBtnXpath)
    paymentInfoText = async () => this.page.locator(checkoutPage.paymentInfoTextXpath)
    orderItems = async () => this.page.locator(common.cartItemsXpath)
    confirmOrderBtn = async () => this.page.locator(checkoutPage.confirmOrderBtnXpath)
    orderConfirmationContinueBtn = async () => this.page.locator(checkoutPage.orderConfirmationContinueBtnCss)
    
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

    async clickBillingContinueBtn() {
        const ele = await this.billingContinueBtn()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickBillingContinueBtn step failed: ${error}`)
        }
    }

    async checkGroundShippingRadioBtn() {
        try {
            const ele = await this.groundShippingRadioBtn();
    
            if (!ele) {
                throw new Error('Ground shipping payment method radio button not found.')
            }
    
            const isChecked = await ele.isChecked()
    
            if (!isChecked) {
                await ele.check()
                logger.info('Ground shipping payment method radio button is now selected.')
            } else {
                logger.warn('Ground shipping payment method radio button is already selected.')
            }
        } catch (error) {
            throw new Error(`checkGroundShippingRadioBtn step failed: ${error}`)
        }
    }

    async clickShippingMethodContinueBtn() {
        const ele = await this.shippingMethodContinueBtn()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickShippingMethodContinueBtn step failed: ${error}`)
        }
    }

    async checkPaymentMethodCheckRadioBtn() {
        try {
            const ele = await this.paymentMethodCheckRadioBtn();
    
            if (!ele) {
                throw new Error('Check payment method radio button not found.')
            }
    
            const isChecked = await ele.isChecked()
    
            if (!isChecked) {
                await ele.check()
                logger.info('Check payment method radio button is now selected.')
            } else {
                logger.warn('Check payment method radio button is already selected.')
            }
        } catch (error) {
            throw new Error(`checkPaymentMethodCheckRadioBtn step failed: ${error}`)
        }
    }

    async clickPaymentMethodContinueBtn() {
        const ele = await this.paymentMethodContinueBtn()

        try {
            await ele?.click()
        } catch (error) {
            throw new Error(`clickPaymentMethodContinueBtn step failed: ${error}`)
        }
    }

    async clickPaymentInfoContinueBtn() {
        try {
            const ele = await this.paymentInfoText()
            const ele1 = await this.paymentInfoContinueBtn()
            const isVisible = await ele.isVisible()

            if(!isVisible) {
                throw new Error('paymentInfoText not found')
            } else {
                await ele1?.click()
                logger.info('Click payment info continue button is now clicked.')
            }
        } catch (error) {
            throw new Error(`clickPaymentInfoContinueBtn step failed: ${error}`)
        }
    }

    async verifyOrder(expectedItemName: string, count: number): Promise<boolean> {
        const item = this.page.locator(`//td[@class='product']//a[contains(text(), '${expectedItemName}')]`)
        const itemsList = await this.orderItems()

        try {
            await expect(item).toBeVisible()
            await expect(itemsList).toHaveCount(count)
            return true
        } catch (error) {
            logger.error(`verifyOrder step failed: ${error}`)
            return false
        }
    }

    async clickConfirmOrderBtn(expectedItemName: string, count: number) {
        try {
            const ele = await this.verifyOrder(expectedItemName, count)

            if(!ele) {
                throw new Error('Confirm order not verified')
            } else {
                const ele1 = await this.confirmOrderBtn()
                await ele1?.click()
                logger.info('Confirm order button is now clicked.')
            }
        } catch (error) {
            throw new Error(`clickConfirmOrderBtn step failed: ${error}`)
        }
    }

    async verifyOrderConfirmation(): Promise<boolean> {
        const ele = this.page.locator(`//h1[text()='Thank you']`)
        const ele1 = this.page.locator(`//strong[text()='Your order has been successfully processed!']`)

        try {
            await expect(ele).toBeVisible()
            await expect(ele1).toBeVisible()
            return true
        } catch (error) {
            logger.error(`verifyOrderConfirmation step failed: ${error}`)
            return false
        }
    }

    async clickOrderConfirmationContinueBtn() {
        try {
            const ele = await this.verifyOrderConfirmation()

            if(!ele) {
                throw new Error('Order confirmation not verified')
            } else {
                const ele1 = await this.orderConfirmationContinueBtn()
                await ele1?.click()
                logger.info('Order confirmation continue button is now clicked.')
            }
        } catch (error) {
            throw new Error(`clickOrderConfirmationContinueBtn step failed: ${error}`)
        }
    }
}