import type { Page } from '@playwright/test'

export default class SharedPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    // async cartBadgeCountCheck(count: number) {
    //     const ele = await this.cartBadgeItemsCount()

    //     try {
    //         expect(parseInt(await ele?.textContent() as string)).toEqual(count)
    //     } catch (error) {
    //         throw new Error(`cartBadgeCountCheck step failed: ${error}`)
    //     }
    // }

    // async cartItemsCountCheck(count: number) {
    //     const list = await this.cartItemsList()

    //     try {
    //         expect(list?.length).toEqual(count)
    //     } catch (error) {
    //         throw new Error(`cartItemsCountCheck step failed: ${error}`)
    //     }
    // }

    // async cartItemNameCheck(expectedItemName: string) {
    //     const itemsList = this.page.locator(common.cartItemNameXpath)
    //     let actualItemName = ""

    //     try {            
    //         const itemCount = await itemsList.count()
            
    //         for (let i = 0; i < itemCount; i++) {
    //             const itemText = await itemsList.nth(i).textContent()
                    
    //             if (itemText?.includes(expectedItemName)) {
    //                 actualItemName = itemText
    //                 break
    //             }
    //         }

    //         expect(actualItemName).toContain(expectedItemName)

    //     } catch (error) {
    //         throw new Error(`cartItemNameCheck step failed: ${error}`)
    //     }
    // }

    // async noCartBadgeCountIconCheck() {
    //     const ele = await this.cartBadgeItemsCount()

    //     try {
    //         expect(ele).toHaveCount(0)
    //     } catch (error) {
    //         throw new Error(`noCartBadgeCountIconCheck step failed: ${error}`)
    //     }
    // }
}