import { When } from "@cucumber/cucumber"
import HomePage from '../../testdata/pages/homePage'
import ShoppingCartPage from "../../testdata/pages/shoppingCartPage"

When('the user proceeds to the checkout process', async function () {
    const homePage = new HomePage(this.page)
    const shoppingCartPage = new ShoppingCartPage(this.page)
    await homePage.shoppingCartLinkItemCountCheck(1)
    await homePage.clickShoppingCartLink()
    await shoppingCartPage.checkShoppingCartTitle()
    await shoppingCartPage.shoppingCartItemsCountCheck(1)
    await shoppingCartPage.shoppingCartItemNameCheck('Fahrenheit 451 by Ray Bradbury')
    await shoppingCartPage.clickTermsOfServiceCheckbox()
    await shoppingCartPage.clickCheckoutBtn()
})