
export default class BaseComponent { 
    constructor(page, container){
        this.page = page;
        this.container = container;
    }

    //container is NOT selector 
    //container is LOCATOR - page.locator('header') 

    // async waitLoaded(){
    //     await this.page.locator(this.container).waitFor();
    // }

    async waitLoaded(){
        await this.container.waitFor();
    }
}



