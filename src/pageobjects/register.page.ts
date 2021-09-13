import { setText } from 'src/utils/commands';
import { selectDropDownByAttributeValue } from 'src/utils/commands';
import { selectDropDownByVisibleText } from 'src/utils/commands';
import { click } from 'src/utils/commands';
import { verifyText } from 'src/utils/commands';
import { waitUntilElementIsDisplayed } from 'src/utils/commands';

import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {
    /**
     * define selectors and functions to access it
     */
    private get btnTitleMr() { return $('#uniform-id_gender1'); }
    private get btnTitleMrs() { return $('#uniform-id_gender2'); }
    private get inputFirstName() { return $('#customer_firstname'); }
    private get inputLastName() { return $('#customer_lastname'); }
    private get inputPassword() { return $('#passwd'); }
    private get getDay() { return $('#days'); }
    private get getMonth() { return $('#months'); }
    private get getYear() { return $('#years'); }
    private get checkboxNewsLetter() { return $('#newsletter'); }
    private get checkboxOffer() { return $('#optin'); }
    private get inputCompanyName() { return $('#company'); }
    private get inputAddressOne() { return $('#address1'); }
    private get inputAddressTwo() { return $('#address2'); }
    private get inputCity() { return $('#city'); }
    private get getState() { return $('#id_state'); }
    private get inputPostCode() { return $('#postcode'); }
    private get getCountry() { return $('#id_country'); }
    private get inputAdditionalInfo() { return $('#other'); }
    private get inputMobileNumber() { return $('#phone_mobile'); }
    private get inputAddressForFuture() { return $('#alias'); }
    private get btnRegister() { return $('#submitAccount > span'); }
    private get verifyFirstNameLastName() { return $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a/span'); }

    async clickOnRadioButton(radioButtonText: string) {
        if (radioButtonText === 'Mr') {
            await waitUntilElementIsDisplayed(this.btnTitleMr, 8000)
            await click(this.btnTitleMr)
        }
        else {
            await waitUntilElementIsDisplayed(this.btnTitleMrs, 8000)
            await click(this.btnTitleMrs)
        }
    }
    async enterCustomerFirstName(customerFirstname: string) {
        await setText(this.inputFirstName, customerFirstname)
    }
    async enterCustomerLastName(customerLastname: string) {
        await setText(this.inputLastName, customerLastname)
    }

    async enterPassword(password: string) {
        await setText(this.inputPassword, password)
    }

    async enterCompanyName(companyName: string) {
        await setText(this.inputCompanyName, companyName)
    }

    async enterAddress(address: string) {
        await setText(this.inputAddressOne, address)
    }

    async enterCityName(cityName: string) {
        await setText(this.inputCity, cityName)
    }

    async enterPostalCode(postalCode: number) {
        await setText(this.inputPostCode, postalCode)
    }

    async enterAdditionalInformation(additionalInformation: string) {
        await setText(this.inputAdditionalInfo, additionalInformation)
    }

    async enterAliasAddress(aliasAddress: string) {
        await setText(this.inputAddressForFuture, aliasAddress)
    }
    async mobilePhoneNumberInput(mobileNUmber: number) {
        await setText(this.inputMobileNumber, mobileNUmber)
    }

    async selectDate(date: number) {
        await selectDropDownByAttributeValue(this.getDay, date)
    }

    async selectMonth(month: number) {
        await selectDropDownByAttributeValue(this.getMonth, month)
    }

    async selectYear(year: number) {
        await selectDropDownByAttributeValue(this.getYear, year)
    }

    async selectState(state: string) {
        await selectDropDownByVisibleText(this.getState, state);
    }

    async selectCountry(country: string) {
        await selectDropDownByVisibleText(this.getCountry, country);
    }

    async clickRegisterButton() {
        await click(this.btnRegister);
    }

    async clicksignUpAndRecieveSpecialOffersCheckBox() {
        await click(this.checkboxNewsLetter);
        await click(this.checkboxOffer);
    }

    async verifyFirstAndLastName(name: string) {
        await (this.verifyFirstNameLastName).waitForDisplayed({ timeout: 20000 })
        await verifyText(this.verifyFirstNameLastName, name);
    }
}

export default new RegistrationPage();