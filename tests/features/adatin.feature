Feature: validate the adactin function of adactin hotel app

Scenario: validate hotel booking
Given navigate to adactin hotelapp
When enter valid username and passwrod
Then click on login button and the app should be redirected to hotel search page
When hotellocation is selected
Then click on search hotel the app should be redirected to select hotel page
When hotel has been selected
Then click on contniue button the app should be navigated to itenary page
