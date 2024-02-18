const { WebDriver } = require('selenium-webdriver');

const {By, Key, Builder, until} = require('selenium-webdriver')


function main() {
    // a = scraper();
    // console.log(a);
    a = firefoxDriver();
    console.log(a)
}


class WebScraper {
    constructor(url: string) {
        this.driver = new Builder().forBrowser('chrome').build();
        this.url = url;
    }
    chromeBrowser() {

        this.driver.get(this.url);
    }
}

async function scraper() {
    async function script() {
        const searchString = 'search';

        let driver = await new Builder().forBrowser("chrome").build();

        await driver.get('https://www.google.com/');

        let title = await driver.getTitle();

        await driver.quit();
    }
    script();
}
async function firefoxDriver() {
    async function firefoxBrowser() {
        let driver = await new Builder().forBrowser("firefox").build();
        try {
            await driver.get('https://www.google.com/');
            await driver.findElement(By.className('gLFyf')).sendKeys('webdriver', Key.RETURN);
            
        } finally {
            await driver.quit();
        }
    }
    firefoxBrowser();
}


main();