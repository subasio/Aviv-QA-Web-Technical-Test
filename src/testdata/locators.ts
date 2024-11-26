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
    checkoutBtnId: '//*[@id=\'checkout\']',
    orderTotalXpath: '//tr[@class=\'order-total\']//span[@class=\'value-summary\']',
    termsOfServiceCheckBoxId: '//*[@id=\'termsofservice\']',
    titleXpath: '//h1[text()=\'Shopping cart\']'
}

export const checkoutPage = {
    address1FieldId: '//*[@id=\'BillingNewAddress_Address1\']',
    billingContinueBtnXpath: '//*[@id=\'billing-buttons-container\']/button[text()=\'Continue\']',
    billingAddressStepId: '//*[@id=\'checkout-step-billing\']',
    cityFieldId: '//*[@id=\'BillingNewAddress_City\']',
    confirmOrderBtnXpath: '//*[@id=\'confirm-order-buttons-container\']/button[text()=\'Confirm\']',
    confirmOrderStepId: '//*[@id=\'checkout-step-confirm-order\']',
    groundShippingRadioBtnId: '//*[@id=\'shippingoption_0\']',
    orderConfirmationContinueBtnCss: 'css=.button-1.order-completed-continue-button',
    paymentInfoContinueBtnXpath: '//*[@id=\'payment-info-buttons-container\']/button[text()=\'Continue\']',
    paymentInfoStepId: '//*[@id=\'checkout-step-payment-info\']',
    paymentInfoTextXpath: '//p[contains(text(),\'Mail Personal or Business Check\')]',
    paymentMethodCheckRadioBtnId: '//*[@id=\'paymentmethod_0\']',
    paymentMethodContinueBtnXpath: '//*[@id=\'payment-method-buttons-container\']/button[text()=\'Continue\']',
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

export const common = {
    cartItemsXpath: '//table[@class=\'cart\']/tbody/tr',
    errorMessageWarningCss: 'css=.message-error.validation-summary-errors',
}