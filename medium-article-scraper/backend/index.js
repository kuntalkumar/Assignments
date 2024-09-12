const express = require('express');
const bodyParser = require('body-parser');
const scrapeMedium = require('./scraper');

const app = express();
app.use(bodyParser.json());

let cachedArticles = [];

app.post('/scrape', async (req, res) => {
    const { topic } = req.body;
    if (!topic) {
        return res.status(400).json({ error: 'Topic is required' });
    }
    try {
        cachedArticles = await scrapeMedium(topic);
        res.json(cachedArticles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to scrape articles' });
    }
});

app.get('/articles', (req, res) => {
    res.json(cachedArticles);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
