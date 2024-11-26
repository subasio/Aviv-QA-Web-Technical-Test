import { Then, When } from '@cucumber/cucumber'
import { decrypt } from '../../../utils/crypto'

import LoginPage from '../../testdata/pages/loginPage'
import HomePage from '../../testdata/pages/homePage'
import RegistrationPage from '../../testdata/pages/registrationPage'
import BooksPage from '../../testdata/pages/booksPage'
import ShoppingCartPage from '../../testdata/pages/shoppingCartPage'
import assert from 'assert'

When('the user clicks on the Register link', async function () {
    const homePage = new HomePage(this.page)
    const registrationPage = new RegistrationPage(this.page)
    await homePage.clickRegistrationLink()
    await registrationPage.checkRegistrationForm()
})

When('the user clicks on the Log in link', async function () {
    const homePage = new HomePage(this.page)
    const loginPage = new LoginPage(this.page)
    await homePage.clickLoginLink()
    await loginPage.checkLoginForm()
})

When('the user clicks on the Books link', async function () {
    const homePage = new HomePage(this.page)
    const booksPage = new BooksPage(this.page)
    await homePage.clickBooksLink()
    await booksPage.checkBooksTitle()
})

When('the user clicks on the Shopping cart link', async function () {
    const homePage = new HomePage(this.page)
    const shoppingCartPage = new ShoppingCartPage(this.page)
    await homePage.clickShoppingCartLink()
    await shoppingCartPage.checkShoppingCartTitle()
})

Then('the user logs in with the newly created user credentials using {string} and {string}',
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