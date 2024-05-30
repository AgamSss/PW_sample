import BasePage from '../basePage.js';
import MainPage from '../mainPage/mainPage.js';

export default class GuestLoginPage extends BasePage{
    constructor(page){
        super(page, '/', page.locator('button', {hasText: 'Guest log in'}))
        this.loginButton = page.locator('button', {hasText: 'Guest log in'});
    }

    async clickAddGuestLogin(){
        await this.loginButton.click();
        return new MainPage(this.page);
    }
}