import { Then, When } from "@cucumber/cucumber"
import CheckoutPage from '../../testdata/pages/checkoutPage'
import HomePage from "../../testdata/pages/homePage"
import assert from "assert"

Then('the user verifies the checkout process steps: Billing, Shipping, Payment', async function() {
    const checkoutPage = new CheckoutPage(this.page)
    await checkoutPage.checkCheckoutTitle()
    assert(await checkoutPage.checkCheckoutProcesses())
})

When('the user fills in the billing and shipping information and clicks continue', async function() {
    const checkoutPage = new CheckoutPage(this.page)
    await checkoutPage.selectCountryDropdownOption('1')
    await checkoutPage.selectStateDropdownOption('47')
    await checkoutPage.setCity('Los Angeles')
    await checkoutPage.setAddress1('1 Pacific Ave, Long Beach')
    await checkoutPage.setPostalCode('90802')
    await checkoutPage.setPhoneNumber('+15624950149')
    await checkoutPage.clickBillingContinueBtn()
})

When('the user selects shipping method and clicks continue', async function() {
    const checkoutPage = new CheckoutPage(this.page)
    await checkoutPage.checkGroundShippingRadioBtn()
    await checkoutPage.clickShippingMethodContinueBtn()
})

When('the user selects payment method and clicks continue', async function() {
    const checkoutPage = new CheckoutPage(this.page)
    await checkoutPage.checkPaymentMethodCheckRadioBtn()
    await checkoutPage.clickPaymentMethodContinueBtn()
})

When('the user validates the payment information and clicks continue', async function() {
    const checkoutPage = new CheckoutPage(this.page)
    await checkoutPage.clickPaymentInfoContinueBtn()
})

When('the user clicks on the Confirm Order button', async function() {
    const checkoutPage = new CheckoutPage(this.page)
    await checkoutPage.clickConfirmOrderBtn('Fahrenheit 451 by Ray Bradbury', 1)
})

Then('the order should be successfully completed and the user should see the order confirmation message', async function() {
    const checkoutPage = new CheckoutPage(this.page)
    const homePage = new HomePage(this.page)
    assert(await checkoutPage.verifyOrderConfirmation())
    await checkoutPage.clickOrderConfirmationContinueBtn()
    await homePage.shoppingCartLinkItemCountCheck(0)
    assert(await homePage.checkHomePageLoggedInDisplayed())
})