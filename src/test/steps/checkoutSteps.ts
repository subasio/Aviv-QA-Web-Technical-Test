import { Then, When } from "@cucumber/cucumber"
import CheckoutPage from '../../testdata/pages/checkoutPage'
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
    await checkoutPage.clickContinueBillingBtn()
})

When('the user selects shipping method and clicks continue', async function() {
    const checkoutPage = new CheckoutPage(this.page)
    await checkoutPage.checkGroundShippingPaymentMethodRadioBtnChecked()
    await checkoutPage.clickContinueShippingMethodBtn()
})