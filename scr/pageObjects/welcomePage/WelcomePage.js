import BasePage from '../basePage.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


 export default class WelcomePage extends BasePage{
     constructor(page){
        super(page, '/', page.locator('button', {hasText: 'Guest log in'}))
        this.header = new Header(page);
        this.footer = new Footer(page);
     }
 }