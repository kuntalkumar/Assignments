const puppeteer = require('puppeteer');

async function scrapeMedium(topic) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://medium.com/search?q=${topic}`);

    const articles = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll('.postArticle');
        items.forEach(item => {
            let title = item.querySelector('.graf--title') ? item.querySelector('.graf--title').innerText : null;
            let author = item.querySelector('.postMetaInline-authorLockup') ? item.querySelector('.postMetaInline-authorLockup').innerText : null;
            let date = item.querySelector('time') ? item.querySelector('time').getAttribute('datetime') : null;
            let url = item.querySelector('.postArticle-content a') ? item.querySelector('.postArticle-content a').href : null;
            if (title && author && date && url) {
                results.push({ title, author, date, url });
            }
        });
        return results;
    });

    await browser.close();
    return articles.slice(0, 5); // Return top 5 articles
}

module.exports = scrapeMedium;
