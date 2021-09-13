import { Given, When, Then } from '@wdio/cucumber-framework';
import RegistrationPage from 'src/pageobjects/register.page';
import HomePage from 'src/pageobjects/home.page';
import SignInPage from 'src/pageobjects/signIn.page';
import productPage from 'src/pageobjects/product.page';


//Stepdefinitions for Home and Register page
Given(/^I navigate to the homepage of myStore website$/, async () => {
    await HomePage.open();
});

When(/^I click on the (signIn|register|createAccountButton|signOut|dresses|addToCart|proceedToCheckout|proceedToCheckoutInSummaryTab|proceedToCheckoutInAddressTab|proceedToCheckoutInShippingTab) button$/, async (text: string) => {
    switch (text) {
        case 'register': await RegistrationPage.clickRegisterButton();
            break;
        case 'signIn': await HomePage.clickSignIn();
            break;
        case 'createAccountButton': await SignInPage.createAccount();
            break;
        case 'signOut': await SignInPage.signOut();
            break;
        case 'dresses': await productPage.clickOnDressButton();
            break;
        case 'addToCart': await productPage.clickOnAddCartButton();
            break;
        case 'proceedToCheckout': await productPage.clickOnproceedToCheckoutButton();
            break;
        case 'proceedToCheckoutInSummaryTab': await productPage.clickOnproceedToCheckoutButtonSummaryTab();
            break;
        case 'proceedToCheckoutInAddressTab': await productPage.clickOnproceedToCheckoutButtonAddressTab();
            break;
        case 'proceedToCheckoutInShippingTab': await productPage.clickOnproceedToCheckoutButtonShippingTab();
            break;
    }
});

When(/^I expect that (title|verifySignInHeader|errorText) has the value \"([^\"]*)\"$/, async (text: string, infoText: string) => {

    switch (text) {
        case 'title': await HomePage.verifySignInHeaderText(infoText);
            break;
        case 'verifySignInHeader': await RegistrationPage.verifyFirstAndLastName(infoText);
            break;
        case 'errorText': await SignInPage.verifyErrorText(infoText);
            break;
    }
});

When(/^I click on the \"([^\"]*)\" radio button$/, async (radioButtonText: string) => {
    await RegistrationPage.clickOnRadioButton(radioButtonText);
});

When(/^I set \"([^\"]*)\" to the (createAccountEmail|customerFirstName|customerLastName|password|companyName|additionalInformation|address|cityName|postcodeNumber|aliasAddress|mobilePhoneNumber) inputfield$/, async (inputFieldText: any, text: string) => {
    switch (text) {
        case 'createAccountEmail': await SignInPage.enterCreateAccountEmail(inputFieldText);
            break;
        case 'customerFirstName': await RegistrationPage.enterCustomerFirstName(inputFieldText);
            break;
        case 'customerLastName': await RegistrationPage.enterCustomerLastName(inputFieldText);
            break;
        case 'password': await RegistrationPage.enterPassword(inputFieldText);
            break;
        case 'companyName': await RegistrationPage.enterCompanyName(inputFieldText);
            break;
        case 'additionalInformation': await RegistrationPage.enterAdditionalInformation(inputFieldText);
            break;
        case 'address': await RegistrationPage.enterAddress(inputFieldText);
            break;
        case 'cityName': await RegistrationPage.enterCityName(inputFieldText);
            break;
        case 'postcodeNumber': await RegistrationPage.enterPostalCode(inputFieldText);
            break;
        case 'aliasAddress': await RegistrationPage.enterAliasAddress(inputFieldText);
            break;
        case 'mobilePhoneNumber': await RegistrationPage.mobilePhoneNumberInput(inputFieldText);
            break;
    }
});

When(/^I click the signUp and recieveSpecialOffers checkbox$/, async () => {
    await RegistrationPage.clicksignUpAndRecieveSpecialOffersCheckBox();
});

When(/^I select the (state|country) \"([^\"]*)\" from dropdownlist$/, async (text: string, location: string) => {

    switch (text) {
        case 'state': await RegistrationPage.selectState(location);
            break;
        case 'country': await RegistrationPage.selectCountry(location);
            break;
    }
});

When(/^I select the (date|month|year) \"([^\"]*)\" from dropdownlist$/, async (text: string, dateOfBirth: number) => {
    if (text == 'date') {
        await RegistrationPage.selectDate(dateOfBirth);
    }
    else if (text == 'month') {
        await RegistrationPage.selectMonth(dateOfBirth)
    }
    else {
        await RegistrationPage.selectYear(dateOfBirth)
    }
});

//Stepdefinitions for signIn Page

When(/^I set \"([^\"]*)\" and \"([^\"]*)\" to the signIn inputfield and click signInButton$/, async (emailAddress: string, password: any) => {
    await SignInPage.signIn(emailAddress, password)
});

//Stepdefinitions for product Page

When(/^I scroll to the \"([^\"]*)\" and click$/, async (dressImage: string) => {
    await productPage.scrollToDressAndHover(dressImage);
});

When(/^I click on the terms of service condition checkbox$/, async () => {
    await productPage.clickTermsOfServiceConditionCheckBox();
});

Then(/^I expect that \"([^\"]*)\" (productName|productColorAndSize|availability|productUnitcost|productTotalcost|productQuantity) has the value \"([^\"]*)\"$/, async (dress: string, text: string, productDetails: string) => {

    switch (text) {
        case 'productColorAndSize': await productPage.verifyProductColorAndSize(dress, productDetails);
            break;
        case 'productName': await productPage.verifyProductName(dress, productDetails);
            break;
        case 'availability': await productPage.verifyProductAvailability(dress, productDetails);
            break;
        case 'productUnitcost': await productPage.verifyProductUnitcost(dress, productDetails);
            break;
        case 'productTotalcost': await productPage.verifyProductTotalcost(dress, productDetails);
            break;
        case 'productQuantity': await productPage.verifyProductQuantity(dress, productDetails);
            break;
    }

});