import { Then, When } from '@cucumber/cucumber'
import { decrypt } from '../../../utils/crypto'

import LoginPage from '../../testdata/pages/loginPage'
import HomePage from '../../testdata/pages/homePage'
import RegistrationPage from '../../testdata/pages/registrationPage'
import assert from 'assert'

When('the user clicks on the Register link', async function () {
    const homePage = new HomePage(this.page)
    const registrationPage = new RegistrationPage(this.page)
    await homePage.clickRegistrationLink()
    await registrationPage.checkRegistrationForm()
})

Then('the user logs in with the newly created user credentials using {string} and {string}', 
    async function (encryptedEmail: string, encryptedPassword: string) {
        const homePage = new HomePage(this.page)
        const loginPage = new LoginPage(this.page)
        await homePage.clickLogoutLnk()
        await homePage.clickLoginLink()
        await loginPage.checkLoginForm()
        await loginPage.setEmail(decrypt(encryptedEmail))
        await loginPage.setPassword(decrypt(encryptedPassword))
        await loginPage.clickLoginLink()
        assert(await homePage.checkHomePageLoggedInDisplayed())
})