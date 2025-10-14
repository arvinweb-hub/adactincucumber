import { Before,After } from "@cucumber/cucumber";
import { LoginPage } from "../pages/login.js";

Before (async function(){
    await this.launchBrowser();
    this.loginPage=new LoginPage(this.page)
})

After (async function(){
    await this.closeBrowser()
})