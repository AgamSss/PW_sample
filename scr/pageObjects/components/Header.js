
import BaseComponent from "../baseComponent";

export default class Header extends BaseComponent {
    constructor(page){
        super(page, page.locator('app-header'));
    }
  
    async getLinkText(){
        const buttons = this.container.locator('.header-link');
        const actualTexts = []

        for(let buttonItem of await buttons.all()){
            actualTexts.push(await buttonItem.innerText());
        }

        return actualTexts;
    }

}