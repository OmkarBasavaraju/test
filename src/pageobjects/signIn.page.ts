import { click, setText } from 'src/utils/commands';
import { verifyText } from 'src/utils/commands';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignInPage extends Page {
    /**
     * define selectors
     */
    private get inputCreateAccountEmail() { return $('#email_create') }
    private get inputSignInEmail() { return $('#email') }
    private get inputSignInpassword() { return $('#passwd') }
    private get btnSignIn() { return $('#SubmitLogin') }
    private get btnCreateAccount() { return $('#SubmitCreate') }
    private get btnSignOut() { return $('#header > div.nav > div > div > nav > div:nth-child(2) > a') }
    private get signInErrorText() { return $('#center_column > div.alert.alert-danger > ol > li') }


    async enterCreateAccountEmail(emailAddress: string) {
        await setText(this.inputCreateAccountEmail, (Date.now() + emailAddress))
    }

    async createAccount() {
        await click(this.btnCreateAccount)
    }

    async signIn(emailAddress: string, password: any) {
        await setText(this.inputSignInEmail, emailAddress)
        await setText(this.inputSignInpassword, password)
        await click(this.btnSignIn)
    }

    async signOut() {
        await (this.btnSignOut).waitForDisplayed({ timeout: 5000 })
        await click(this.btnSignOut)
    }

    async verifyErrorText(errorText: string) {
        await verifyText(this.signInErrorText, errorText);
    }

}

export default new SignInPage();