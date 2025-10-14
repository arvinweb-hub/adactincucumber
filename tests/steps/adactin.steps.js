import { Given,When,Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/login.js";
import { SearchHotel } from "../pages/searchHotel.js";
import { SelectHotel } from "../pages/selectHotel.js";


let loginPage; 
let searchHotel;
let selectHotel
Given('navigate to adactin hotelapp', async function () {
           loginPage=new LoginPage(this.page);
           await loginPage.navigate("https://adactinhotelapp.com/");
           //await loginPage.waitForTimeout(10000);

});


When('enter valid username and passwrod', async function () {
          await loginPage.login("arvinwebhacker","arvinwebhacker");

});

Then('click on login button and the app should be redirected to hotel search page', async function () {
        await loginPage.clickLoginBtn();
            
});

 When('hotellocation is selected', async function () {
        searchHotel = new SearchHotel(this.page)        
        await searchHotel.search("Sydney")
});

Then('click on search hotel the app should be redirected to select hotel page', async function () {
           await searchHotel.clickSearchBtn()
         });

 When('hotel has been selected', async function () {
           selectHotel=new SelectHotel(this.page)
           await selectHotel.selectedHotel("Hotel Creek")

         });
Then('click on contniue button the app should be navigated to itenary page', async function () {
          await selectHotel.clickContinueBtn()
         });
