import BasePage from '../basePage.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { expect } from '@playwright/test';

export default class MainPage extends BasePage{
    constructor(page){
       super(page, '/', page.locator('button', {hasText: 'Guest log in'}))
       this.header = new Header(page);
        this.footer = new Footer(page);
    }

    async verifyLinksText(expectedText){
        expect(await this.header.getLinkText(), "Check thet text from header links are same").toEqual(expectedText);
    }
}
