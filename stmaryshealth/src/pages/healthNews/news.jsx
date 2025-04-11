import "./news.css";
import React, { useEffect, useState } from 'react';

function News() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(6);

    const API_KEY = "1a26517fef1347fc8077881728b9eb84"; 

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?sources=bbc-news&qInTitle=health&language=en&sortBy=publishedAt&apiKey=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setArticles(data.articles);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching news:", err);
                setLoading(false);
            });
    }, []);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    if (loading) return <p>Loading health news...</p>;
    if (!articles.length) return <p>No health articles found.</p>;

    return (
        <div className="news-page">
            <h1>BBC Health News</h1>
            <hr />
            <div className="news-grid">
                {articles.slice(0, visibleCount).map((article, index) => (
                    <div key={index} className="news-card">
                        {article.urlToImage && (
                            <img src={article.urlToImage} alt={article.title} />
                        )}
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                ))}
            </div>
            {visibleCount < articles.length && (
                <button className="load-more" onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
}

export default News;
