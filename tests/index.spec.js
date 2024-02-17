const {By, Browser} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require('assert/strict');
const {Select} = require('selenium-webdriver');
const { markAsUntransferable } = require('worker_threads');

suite(function (env) {
    describe('scraping tests', async function () {
        let driver;

        before(async function() {
            driver = await env.builder().build()
            await driver.get(ENV.URL);
        })

        after(async () => await driver.quit())
    }

    

})