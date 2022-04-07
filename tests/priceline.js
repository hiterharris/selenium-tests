const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function priceline(){
 
    const startLocation = 'Charlotte, NC (CLT)'
    const endLocation = 'Malé, Maldives (MLE)'
    const dateRange = '04/27/2022 – 05/02/2022'

    let driver = await new Builder().forBrowser("chrome").build();

     await driver.get("https://www.priceline.com/?tab=flights&vrid=ae574b1a4cd2a084deafeaba3097f4fc");
         
     await driver.findElement(By.name("flights.0.startLocation")).sendKeys(startLocation);
     await driver.findElement(By.name("flights.0.endLocation")).sendKeys(endLocation);
     await driver.findElement(By.name("flight-date-range-0")).sendKeys(dateRange);

     var title = await driver.getTitle();
     console.log('Title is:',title);

     await driver.quit();
};

priceline();
