import { Then, When } from "@cucumber/cucumber"
import HomePage from '../../testdata/pages/homePage'
import ShoppingCartPage from "../../testdata/pages/shoppingCartPage"

When('the user proceeds to the shopping cart and checkout process', async function () {
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

Then('the user verifies book {string} with quantity {string} in cart',
    async function (product: string, quantity: string) {
        const shoppingCartPage = new ShoppingCartPage(this.page)
        await shoppingCartPage.shoppingCartItemNameAndQuantityCheck(product, quantity)
        await shoppingCartPage.shoppingCartTotal('$102.00')
})

When('the user modifies the quantity of a {string} book',
    async function (product: string) {
        const shoppingCartPage = new ShoppingCartPage(this.page)
        await shoppingCartPage.shoppingCartItemNameAndQuantityCheck(product, '1')
        await shoppingCartPage.clickShoppingCartItemQuantityUpBtn(product)
        await shoppingCartPage.shoppingCartItemNameAndQuantityCheck(product, '2')
        await shoppingCartPage.shoppingCartTotal('$129.00')
})