import { When } from "@cucumber/cucumber"
import HomePage from '../../testdata/pages/homePage'
import BooksPage from "../../testdata/pages/booksPage"

When('the user adds a {string} book to the shopping cart', async function(product: string) {
    const homePage = new HomePage(this.page)
    const booksPage = new BooksPage(this.page)
    await booksPage.addProductToCartBtn(product)
    await homePage.checkNotificationPopUpBarMsg()
    await homePage.clickNotificationPopUpBarClose()
})