import { When, Then } from '@cucumber/cucumber'
import { decrypt } from '../../../utils/crypto'

import HomePage from '../../testdata/pages/homePage'
import RegistrationPage from '../../testdata/pages/registrationPage'
import assert from 'assert'

When('the user fills in valid information for a new user with {string}, {string}, {string} and {string}',
    async function (firstname: string, lastname: string, encryptedEmail: string, encryptedPassword: string) {
        const registrationPage = new RegistrationPage(this.page)
        await registrationPage.setFirstName(firstname)
        await registrationPage.setLastName(lastname)
        await registrationPage.setEmail(decrypt(encryptedEmail))
        await registrationPage.setPassword(decrypt(encryptedPassword))
        await registrationPage.setConfirmPassword(decrypt(encryptedPassword))
        await registrationPage.clickRegistrationBtn()
})

Then('the user should see a registration success message {string}', async function (message: string) {
    const registrationPage = new RegistrationPage(this.page)
    assert(await registrationPage.checkRegistrationSuccessMessage(), message)
    await registrationPage.clickContinueBtn()
})

Then('the user should be redirected to the homepage', async function () {
    const homePage = new HomePage(this.page)
    assert(await homePage.checkHomePageLoggedInDisplayed())
    await homePage.clickLogoutLnk()
})

When('the user fills in valid information for a new user with {string}, {string}, {string}, {string} and {string}',
    async function (firstname: string, lastname: string, email: string, password: string, confirmPassword: string) {
        const registrationPage = new RegistrationPage(this.page)
        await registrationPage.setFirstName(firstname)
        await registrationPage.setLastName(lastname)
        await registrationPage.setEmail(email)
        await registrationPage.setPassword(password)
        await registrationPage.setConfirmPassword(confirmPassword)
        await registrationPage.clickRegistrationBtn()
})

Then('error message {string} should be displayed', async function (message: string) {
    const registrationPage = new RegistrationPage(this.page)
    await registrationPage.checkErrorMessage(message)
})