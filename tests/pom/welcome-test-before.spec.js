import {test, expect} from '@playwright/test';
import WelcomePage from '../../scr/pageObjects/welcomePage/WelcomePage';
import Header from '../../scr/pageObjects/components/Header';

test.describe('Before all setup', () => {

    let page;
    let welcomePage;
    test.beforeAll(async ({browser}) => {
        const context = await browser.newContext({
            viewport: {width: 1920, height: 1080},        
        });

        page = await context.newPage();
        welcomePage = new WelcomePage(page);
    });

    // test.beforeEach(async () => {
    //     const welcomePage = new WelcomePage(page);
    //     await welcomePage.open();
    //     await welcomePage.waitLoaded();
    // });

    test.beforeEach(async () => {
        await welcomePage.open();
        await welcomePage.waitLoaded();
    });

    test.afterAll(async ({browser}) => {
        await page.close();
        await browser.close();
    });

    test('Second test', async () => {
        const expectedButtonsText = [ 'Home', 'About', 'Contacts', 'Guest log in'];
        const header = new Header(page);
        await header.waitLoaded();

        const linksText = await header.getLinkText();
        expect(linksText).toEqual(expectedButtonsText);
    });

    test('Test with added header to class', async () => {
        const expectedButtonsText = [ 'Home', 'About', 'Contacts', 'Guest log in'];
        
        const linksText = await welcomePage.header.getLinkText();
        expect(linksText).toEqual(expectedButtonsText);
    });
});