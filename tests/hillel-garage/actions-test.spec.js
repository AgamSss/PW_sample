// @ts-check
//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test.describe('First test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })
    test('Text input', async ({ page }) => {
        const guestLogin = page.locator('input'); //textare
        // put the text
        await guestLogin.fill('Hello, World!', { 
            timeout: 7000,
            force: true, 
        });
        // old function
        await guestLogin.type('Enter');

        // new function
        await guestLogin.pressSequentially('Hello, World!');
        await guestLogin.clear();
    
        // press the key
        await guestLogin.press('Enter');

    })

    test('Checkboxes and radios', async ({ page }) => {
        const guestLogin = page.locator('input');
        // same for checkboxes and radios
        await guestLogin.check();
        await guestLogin.uncheck();
    })

    test('Clicks', async ({ page }) => {
        const button = page.locator('button');
       await button.click();
       await button.dblclick();
       
       await button.click({clickCount: 10, delay: 50});
       await button.click({modifiers: ['Alt']});

       await button.click({position: {x: 10, y: 10}});
       await button.click({force: true});
       await button.click({timeout: 5000});

    })
    
    test('Selects', async ({ page }) => {
        const button = page.locator('select');
        // select by text
        await button.selectOption('Option 1');
        await button.selectOption({label: 'Option 1'});
        // select by value
        await button.selectOption({value: '1'});
        // select by index
        await button.selectOption({index: 1});

    })

})