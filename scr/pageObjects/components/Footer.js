import BaseComponent from '../baseComponent';

export default class Footer extends BaseComponent {

    constructor(page){
        super(page, page.locator('footer'));
        this.footerLog = this.container.locator('svg');

        this.nameInput = page.locator('input[name="name"]');
        this.emailInput = page.locator('input[name="email"]');
        this.messageInput = page.locator('textarea[name="message"]');
        this.submitButton = page.locator('button[type="submit"]');  
    }

    async getFooterLogo(){
        await this.footerLog.innerText();
    }

    async fillLoginForm(data){
        await this.nameInput.fill(data.name);
        await this.emailInput.fill(data.email);
        await this.messageInput.fill(data.message);
        await this.submitButton.click();
    }
}