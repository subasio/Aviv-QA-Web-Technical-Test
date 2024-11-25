import { Given } from '@cucumber/cucumber'
import HomePage from '../../testdata/pages/homePage'

Given('the user navigates to the website', async function () {
    const homePage = new HomePage(this.page)
    await homePage.checkHomePageNotLoggedInDisplayed()
})