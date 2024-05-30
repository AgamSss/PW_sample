import {test, expect} from '@playwright/test';
import WelcomePage from '../../scr/pageObjects/welcomePage/WelcomePage';
import Header from '../../scr/pageObjects/components/Header';

test.describe('First test', () => {

    test("", async ({page}) => {
        const welcomePage = new WelcomePage(page);
        await welcomePage.open();
        await welcomePage.waitLoaded();
    })
});