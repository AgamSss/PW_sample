import {test, expect} from '@playwright/test';
import MainPage from '../../scr/pageObjects/mainPage/mainPage';
import { HEADER_LINKS_TEXT_VALUE } from './fixtures/test-data-pom';
import GuestLoginPage from '../../scr/pageObjects/guestLogin/GuestLoginPage';

test.describe('Main page', ()=> {
    let page;
    let mainPage;


    test.beforeAll(async ({browser}) => {
        const context = await browser.newContext({
            viewport: {width: 1920, height: 1080},        
        });

        page = await context.newPage();
        mainPage = new MainPage(page);
    })

    test.beforeEach(async () => {
        await mainPage.open();
        await mainPage.waitLoaded();
        await mainPage.footer.waitLoaded();
    })


    test.afterAll(async ({browser}) => {
        await page.close();
        await browser.close();
    })

    test('open main page', async() => {
        await page.locator('button', {hasText: 'Sign in'}).click();
    })

    test('Compare header links text', async() => {
        await mainPage.verifyLinksText(HEADER_LINKS_TEXT_VALUE);
    })

    test('Compare header links text 1', async({page}) => {
        const guestLoginPage = new GuestLoginPage(page);
        await guestLoginPage.open();
        await guestLoginPage.waitLoaded();

        const addGuestPage = await guestLoginPage.clickGuestLogin();
        await addGuestPage.waitLoaded();
        await addGuestPage.verifyLinksText(HEADER_LINKS_TEXT_VALUE);
    })


})

