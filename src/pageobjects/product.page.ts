import { click, scrollToElement, waitUntilElementIsDisplayed, verifyText, waitForClickable } from 'src/utils/commands';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors
     */

    private get btnDresses() { return $('//*[@id="block_top_menu"]/ul/li[2]') }
    private get firstDress() { return $('//*[@id="center_column"]/ul/li[1]/div/div[1]/div/a[1]') }
    private get secondDress() { return $('//*[@id="center_column"]/ul/li[2]/div/div[1]/div/a[1]') }
    private get btnAddCart() { return $('//*[@id="add_to_cart"]/button') }
    private get btnProceedToCheckout() { return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a') }
    private get btnProceedToCheckoutSummaryTab() { return $('//*[@id="center_column"]/p[2]/a[1]') }
    private get btnProceedToCheckoutAddressTab() { return $('//*[@id="center_column"]/form/p/button') }
    private get btnProceedToCheckoutShippingTab() { return $('//*[@id="form"]/p/button') }
    private get firstDressColorAndSize() { return $('//*[contains(@id ,"product_3_13")]/td[2]/small[2]/a') }
    private get secondDressColorAndSize() { return $('//*[contains(@id ,"product_4_16")]/td[2]/small[2]/a') }
    private get firstDressAvailability() { return $('//*[contains(@id ,"product_3_13")]/td[3]/span') }
    private get secondDressAvailability() { return $('//*[contains(@id ,"product_4_16")]/td[3]/span') }
    private get firstDressName() { return $('//*[contains(@id ,"product_3_13")]/td[2]/p/a') }
    private get secondDressName() { return $('//*[contains(@id ,"product_4_16")]/td[2]/p/a') }
    private get firstProductUnitPrice() { return $('//*[contains(@id ,"product_price_3_13")]/span') }
    private get firstProductTotalPrice() { return $('#total_price') }
    private get firstProductQuantity() { return $('//*[contains(@id ,"product_3_13")]/td[5]/span') }
    private get secondProductUnitPrice() { return $('//*[contains(@id ,"product_price_4_16")]/span') }
    private get secondProductTotalPrice() { return $('#total_price') }
    private get secondProductQuantity() { return $('//*[contains(@id ,"product_4_16")]/td[5]/span') }
    private get checkboxTermsAndConditions() { return $('#uniform-cgv') }


    async clickOnDressButton() {
        await waitUntilElementIsDisplayed(this.btnDresses, 8000)
        await click(this.btnDresses)
    }
    async scrollToDressAndHover(dressImage: string) {
        if (dressImage == 'firstDress') {
            await scrollToElement(this.firstDress)
            await click(this.firstDress);
        } else {
            await scrollToElement(this.secondDress)
            await click(this.secondDress);
        }
    }

    async clickOnAddCartButton() {
        await waitForClickable(this.btnAddCart, 5000)
        await click(this.btnAddCart)
    }

    async clickOnproceedToCheckoutButton() {
        await waitUntilElementIsDisplayed(this.btnProceedToCheckout, 8000)
        await click(this.btnProceedToCheckout)
    }

    async clickOnproceedToCheckoutButtonSummaryTab() {
        await scrollToElement(this.btnProceedToCheckoutSummaryTab)
        await click(this.btnProceedToCheckoutSummaryTab)
    }

    async clickOnproceedToCheckoutButtonAddressTab() {
        await scrollToElement(this.btnProceedToCheckoutAddressTab)
        await click(this.btnProceedToCheckoutAddressTab)
    }

    async clickOnproceedToCheckoutButtonShippingTab() {
        await scrollToElement(this.btnProceedToCheckoutShippingTab)
        await click(this.btnProceedToCheckoutShippingTab)
    }

    async clickTermsOfServiceConditionCheckBox() {
        await scrollToElement(this.checkboxTermsAndConditions)
        await click(this.checkboxTermsAndConditions)
    }

    async verifyProductColorAndSize(dress: string, sizeColor: string) {
        if (dress == 'firstDress') {
            await verifyText(this.firstDressColorAndSize, sizeColor)
        } else {
            await verifyText(this.secondDressColorAndSize, sizeColor)
        }

    }

    async verifyProductAvailability(dress: string, availabilityText: string) {
        if (dress == 'firstDress') {
            await verifyText(this.firstDressAvailability, availabilityText)
        } else {
            await verifyText(this.secondDressAvailability, availabilityText)
        }
    }

    async verifyProductName(dress: string, productName: string) {
        if (dress == 'firstDress') {
            await verifyText(this.firstDressName, productName)
        } else {
            await verifyText(this.secondDressName, productName)
        }
    }

    async verifyProductUnitcost(dress: string, unitCost: any) {
        if (dress == 'firstDress') {
            await verifyText(this.firstProductUnitPrice, unitCost)
        } else {
            await verifyText(this.secondProductUnitPrice, unitCost)
        }

    }
    async verifyProductTotalcost(dress: string, totalCost: any) {
        if (dress == 'firstDress') {
            await verifyText(this.firstProductTotalPrice, totalCost)
        } else {
            await verifyText(this.secondProductTotalPrice, totalCost)
        }

    }
    async verifyProductQuantity(dress: string, quantity: any) {
        if (dress == 'firstDress') {
            await verifyText(this.firstProductQuantity, quantity)
        } else {
            await verifyText(this.secondProductQuantity, quantity)
        }
    }

}

export default new ProductPage();