import { ChainablePromiseElement } from "webdriverio";

//Common functions can be used across the test cases
//select dropdown using attribute value
export const selectDropDownByAttributeValue = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, Value: number) => {
    const selectValue = element;
    (await (selectValue).selectByAttribute('value', Value));
}

//Select dropdown using visible text
export const selectDropDownByVisibleText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    (await (element).selectByVisibleText(text));
}

//Send value to the input field
export const setText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: any) => {
    await (element).setValue(text);
}

//Click function
export const click = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await element.click();
}

//Verify two vaues
export const verifyText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    const storeText = await element.getText()
    expect((storeText)).toEqual(text);
}

//Scrolling functionality
export const scrollToElement = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await element.scrollIntoView();
}

//Hover functionality
export const hoverOnElement = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await element.moveTo();
}

//Wait functionality(until the element is displayed)
export const waitUntilElementIsDisplayed = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, timeOut: number) => {
    await element.waitForDisplayed({ timeout: timeOut });
}

//Wait functionality(until the element is clickable)
export const waitForClickable = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, timeOut: number) => {
    await element.waitForClickable({ timeout: timeOut });
}