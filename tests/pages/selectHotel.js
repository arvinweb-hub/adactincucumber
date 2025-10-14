import { count } from "console"

export class SelectHotel{

    constructor(page){

        this.page = page
        
        this.continuebtn=page.locator("//input[@id='continue']")
        this.hotelName= this.page.locator("//input[contains(@value,'Hotel')]")

    }

   async selectedHotel(hotel){
    this.firsthotel=this.page.locator(`//input[@value='${hotel}']/parent::td/preceding-sibling::td/input[@type='radio']`)
    await this.firsthotel.click()
   }

   async clickContinueBtn(){
    
    await this.continuebtn.click()
   }
    // async selectedHotel(){
    //     const firsthoteldetail=await this.firsthotel.inputValue()
    //     //const firsthoteldetail = await this.firsthotel.textContent();

    //     //await page.waitForTimeout(5000)
    //     const hotelName = firsthoteldetail
    //     console.log(hotelName)
    //     return hotelName  
        
    // }

   async listHotel(){
    await this.hotelName.nth(0).waitFor({ state: 'visible' });
    
        const countHL =await this.hotelName.count()
        let hotelList=[]
        for (let i=0; i<countHL;i++){
           const hotelnameloop=await this.hotelName.nth(i).inputValue() 
           hotelList.push(hotelnameloop)
           }
        console.log(hotelList);
           
        return hotelList
   }


}