// @ts-check
//const { test, expect } = require('@playwright/test');
import {test, expect} from '@playwright/test';


// class Locator {
//     consructur(selector){
//         this.selector = selector;
//     }
// }

// new Locator('button')

test.describe('First test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('Find Guest Login', async ({ page }) => {
        //const guestLogin = page.locator('.header-link');
        const guestLogin = page.locator('.header-link', { hasText: 'Guest log in'});
        //const guestLogin = page.locator('.header_right', {has: page.locator('.header-link', {hasText: 'Guest log in'})});
        //const guestLogin = page.locator('.header-link').filter({hasText: 'Guest log in'})//.filter({hasText: 'Guest log in'});
        const count = await guestLogin.count();
        expect(count).toBe(1);
        await guestLogin.click();
    })





    test('Find Guest Login - locator to locator', async ({ page }) => {
        // change context to header_right
        const gestLoginHeaderRight = page.locator('.header_right');

        const guestLogin = gestLoginHeaderRight.locator('.header-link',{ hasText: 'Guest log in'})
        //const signIN = gestLoginHeaderRight.getByText('Sign in');
        const count = await guestLogin.count();
        expect(count).toBe(1);
        await guestLogin.click();
    })

    test('Find Guest Login - by first OR Last', async ({ page }) => {
        // change context to header_right
        const gestLoginHeaderRight = page.locator('.header_right');
        await gestLoginHeaderRight.locator('.header-link',{ hasText: 'Guest log in'}).first().click();
        await gestLoginHeaderRight.locator('.header-link',{ hasText: 'Guest log in'}).last().click();
        // by nth()
        await gestLoginHeaderRight.locator('.header-link',{ hasText: 'Guest log in'}).nth(0).click();
    })

    test('Find All text in header buttons', async ({ page }) => {
        const expectedButtonsText = [ 'About', 'Contacts', 'Guest log in', 'Home'];
        const buttons = page.locator('.header-link');

        const actualTexts = []

        // const count = await buttons.count();

        // for (let i = 0; i < count; i++) {
        //     const text = await buttons.nth(i).innerText();
        //     actualTexts.push(text);
        // }

        for(let buttonItem of await buttons.all()){
            // const text = await buttonItem.innerText();
            // actualTexts.push(text);
            actualTexts.push(await buttonItem.innerText());
        }

        expect(actualTexts.sort()).toEqual(expectedButtonsText.sort());
    })


})