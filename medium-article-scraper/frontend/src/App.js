import React, { useState } from 'react';
import './App.css';

function App() {
    const [topic, setTopic] = useState('');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!topic) {
            setError('Topic is required');
            return;
        }
        setError('');
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/scrape`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ topic }),
            });
            const data = await response.json();
            setArticles(data);
        } catch (err) {
            setError('Failed to fetch articles');
        }
        setLoading(false);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter topic"
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <h2>{article.title}</h2>
                        </a>
                        <p>{article.author}</p>
                        <p>{new Date(article.date).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
