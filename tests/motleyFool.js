const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function motleyFool(){

    let driver = await new Builder().forBrowser("chrome").build();

    const login = '';
    const pw = '';

     await driver.get("https://auth.fool.com/login?state=hKFo2SBWSGFFNE4tWVpVSkJ0bS1RQVdqaUk3LWlXODFvS1phbqFupWxvZ2luo3RpZNkgRDVkRS0xNWNTSUFnNW9hMmdGWURpNFhBcEVBNkdyQVejY2lk2SBLR0Q1NkxQZ21FelBRRnhxQ3lHWWNiSDVEVUtxTEkyeg&client=KGD56LPgmEzPQFxqCyGYcbH5DUKqLI2z&protocol=oauth2&response_type=code&scope=openid%20email%20profile%20member&redirect_uri=https%3A%2F%2Fwww.fool.com%2Fpremium%2Fauth%2Fcallback%2F&audience=https%3A%2F%2Fwww.fool.com&nonce=jXd5n44rW5xygu6hPCdV88RlIthP8ZHX");
         
     await driver.findElement(By.id("usernameOrEmail")).sendKeys(login);
     await driver.findElement(By.id("password")).sendKeys(pw);
     await driver.findElement(By.id("btn-login")).click();

     var title = await driver.getTitle();
     console.log('Title is:',title);

    //  await driver.quit();
};

motleyFool();
