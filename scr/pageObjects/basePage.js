import BaseComponent from "./baseComponent";


export default class BasePage extends BaseComponent{
    constructor(page, url, container){
        //const wrapper = container ?? page.locator('html');
        const wrapper = container ?? page.locator('html');
        super(page, wrapper);
        this._url = url;
    }

    async navigate(){
        await this.open();
        await this.waitLoaded(this.wrapper);
    }

    async open(){
        await this.page.goto(this._url);
    }
}