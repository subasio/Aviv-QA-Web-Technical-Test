import { Then } from '@cucumber/cucumber'
import { decrypt } from '../../../utils/crypto'

import LoginPage from '../../testdata/pages/loginPage'
import HomePage from '../../testdata/pages/homePage'
import assert from 'assert'

Then('the user logs in with the existing user credentials using {string} and {string}',
    async function (encryptedEmail: string, encryptedPassword: string) {
        const homePage = new HomePage(this.page)
        const loginPage = new LoginPage(this.page)
        await homePage.clickLoginLink()
        await loginPage.checkLoginForm()
        await loginPage.setEmail(decrypt(encryptedEmail))
        await loginPage.setPassword(decrypt(encryptedPassword))
        await loginPage.clickLoginLink()
        assert(await homePage.checkHomePageLoggedInDisplayed())
})