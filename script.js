document.addEventListener('DOMContentLoaded', function() {
    fetchLatestNews();
});

function fetchLatestNews() {
    fetch('https://api.example.com/latest-news?country=uae', {
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
        }
    })
    .then(response => response.json())
    .then(data => {
        const slider = document.getElementById('newsSlider');
        data.articles.forEach(article => {
            const item = document.createElement('div');
            item.className = 'news-item';

            const image = document.createElement('img');
            image.src = article.urlToImage;
            image.className = 'news-image';

            const title = document.createElement('div');
            title.className = 'news-title';
            title.textContent = article.title;

            const description = document.createElement('div');
            description.className = 'news-description';
            description.textContent = article.description;

            item.appendChild(image);
            item.appendChild(title);
            item.appendChild(description);
            slider.appendChild(item);
        });
    })
    .catch(error => console.error('Error fetching news:', error));
}
