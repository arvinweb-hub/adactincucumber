
export class LoginPage{
    constructor (page){
        this.page=page
        this.username=page.locator("//input[@id='username']")
        this.password=page.locator("//input[@id='password']")
        this.loginBtn=page.locator("//input[@id='login']")

    }

    async navigate(url){
        await this.page.goto(url)
    
    }

    async login(username,pwd){
        await this.username.fill(username)
        await this.password.fill(pwd)
        //await this.loginBtn.click()
    }

    async clickLoginBtn(){
        await this.loginBtn.click()
    }

}




