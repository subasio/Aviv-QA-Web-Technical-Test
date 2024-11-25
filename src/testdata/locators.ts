export const homePage = {
    booksLinkCss: 'css=ul[class=\'top-menu notmobile\'] a[href=\'/books\']',
    loginLnkCss: 'css=.ico-login',
    logoutLnkCss: 'css=.ico-logout',
    myAccountLnkCss: 'css=.ico-logout',
    registrationLnkCss: 'css=.ico-register',
    shoppingCartLnkCss: 'css=.cart-label',
    shoppingCartLnkItemCountXpath: '//span[@class=\'cart-qty\']'
}

export const registrationPage = {
    confirmPasswordFieldId: '//*[@id=\'ConfirmPassword\']',
    continueBtnCss: 'css=.button-1.register-continue-button',
    emailErrMsgId: '//*[@id=\'Email-error\']',
    emailFieldId: '//*[@id=\'Email\']',
    firstNameFieldId: '//*[@id=\'FirstName\']',
    firstNameErrMsgId: '//*[@id=\'FirstName-error\']',
    lastNameFieldId: '//*[@id=\'LastName\']',
    lastNameErrMsgId: '//*[@id=\'LastName-error\']',
    passwordFieldId: '//*[@id=\'Password\']',
    passwordErrMsgId: '//*[@id=\'ConfirmPassword-error\']',
    registrationBtnId: '//*[@id=\'register-button\']',
    registrationSuccessMsgXpath: '//div[@class=\'result\']',
    titleXpath: '//h1[text()=\'Register\']'
}

export const loginPage = {
    emailFieldId: '//*[@id=\'Email\']',
    loginLnkCss: 'css=button[class=\'button-1 login-button\']',
    loginFormCss: 'css=div[class=\'page-title\'] h1',
    passwordFieldId: '//*[@id=\'Password\']'
}

export const booksPage = {
    titleXpath: '//h1[text()=\'Books\']'
}

export const notificationBar = {
    barCss: 'css=.content',
    closeCss: 'css=span[title=\'Close\']'
}

export const shoppingCartPage = {
    cartItemsXpath: '//table[@class=\'cart\']/tbody/tr',
    checkoutBtnId: '//*[@id=\'checkout\']',
    termsOfServiceCheckBoxId: '//*[@id=\'termsofservice\']',
    titleXpath: '//h1[text()=\'Shopping cart\']'
}

export const checkoutPage = {
    address1FieldId: '//*[@id=\'BillingNewAddress_Address1\']',
    billingContinueBtnXpath: '//*[@id=\'billing-buttons-container\']/button[text()=\'Continue\']',
    billingAddressStepId: '//*[@id=\'checkout-step-billing\']',
    cityFieldId: '//*[@id=\'BillingNewAddress_City\']',
    confirmOrderStepId: '//*[@id=\'checkout-step-confirm-order\']',
    groundShippingMethodRadioBtnId: '//*[@id=\'shippingoption_0\']',
    paymentInfoStepId: '//*[@id=\'checkout-step-payment-info\']',
    paymentMethodStepId: '//*[@id=\'checkout-step-payment-method\']',
    phoneNumberFieldId: '//*[@id=\'BillingNewAddress_PhoneNumber\']',
    postalCodeFieldId: '//*[@id=\'BillingNewAddress_ZipPostalCode\']',
    selectCountryDropdownId: '//*[@id=\'BillingNewAddress_CountryId\']',
    selectStateDropdownId: '//*[@id=\'BillingNewAddress_StateProvinceId\']',
    shippingMethodContinueBtnXpath: '//*[@id=\'shipping-method-buttons-container\']/button[text()=\'Continue\']',
    shippingMethodStepId: '//*[@id=\'checkout-step-shipping-method\']',
    shippingAddressStepId: '//*[@id=\'checkout-step-shipping\']',
    titleXpath: '//h1[text()=\'Checkout\']'
}

export const checkoutOverviewPage = {
    finishBtnId: '//*[@id=\'finish\']',
    titleXpath: '//span[@class=\'title\' and text()=\'Checkout: Overview\']'
}

export const checkoutCompletePage = {
    backHomeBtnId: '//*[@id=\'back-to-products\']',
    orderDispatchedMessageXpath: '//*[contains (text(), \'Your order has been dispatched\')]',
    thankYouMessageXpath: '//h2[text()=\'Thank you for your order!\']',
    titleXpath: '//span[@class=\'title\' and text()=\'Checkout: Complete!\']'
}

export const common = {
    cancelBtnId: '//*[@id=\'cancel\']',
    cartBadgeItemsCountXpath: '//span[@class=\'shopping_cart_badge\']',
    cartBtnId: '//*[@id=\'shopping_cart_container\']',
    cartItemNameXpath: '//*[@class=\'inventory_item_name\']',
    cartItemsXpath: '//*[@class=\'cart_item\']',
    errorMessageWarningCss: 'css=.message-error.validation-summary-errors',
    menuBtnAboutXpath: '//a[@id=\'about_sidebar_link\' and text()=\'About\']',
    menuBtnAllItemsXpath: '//a[@id=\'inventory_sidebar_link\' and text()=\'All Items\']',
    menuBtnId: '//*[@class=\'bm-burger-button\']',
    menuBtnXpath: '//*[@class=\'bm-burger-button\']',
    menuBtnLogoutXpath: '//a[@id=\'logout_sidebar_link\' and text()=\'Logout\']',
    menuBtnResetAppStateXpath: '//a[@id=\'reset_sidebar_link\' and text()=\'Reset App State\']',
}