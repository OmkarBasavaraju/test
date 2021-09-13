import { click, verifyText } from 'src/utils/commands';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors and functions to access it
     */
    private get btnSignIn() { return $("//a[contains(text(),'Sign in')]") }
    private get headerText() { return $('head > title') }

    open() {
        return super.open();
    }

    async clickSignIn() {
        await click(this.btnSignIn);
    }

    async verifySignInHeaderText(titlText: string) {
        await verifyText(this.headerText, titlText);

    }

}

export default new HomePage();
