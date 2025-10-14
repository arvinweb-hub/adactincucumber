
export class SearchHotel{
    constructor(page){
        this.location=page.locator("//select[@id='location']")
        this.searchSubmit=page.locator("//input[@id='Submit']")

    }
    async search(hotellocation){
        await this.location.selectOption({label:hotellocation})
        
    }

    async clickSearchBtn(){
        await this.searchSubmit.click()
    }
           
}


