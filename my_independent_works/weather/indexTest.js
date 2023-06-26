const puppeteer = require('puppeteer')

async function main() {
    const browser = await puppeteer.launch({
        headless: true,
        args:["--no-sundbox"]
    });
    const tub = await brwuser.newPage();
    const text = await ( await tub.goto("https://example.com")).text();
    console.log(text);
    browser.close()
}
main();