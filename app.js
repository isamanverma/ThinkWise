
function updateQuote() {
    const thoughtElement = document.querySelector('.thought');
    const authorElement = document.querySelector('.author');
    const categoryElement = document.querySelector('.category');

    fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
            'X-Api-Key': 'XvWeWkc4YJ1+6QXRWoTB3Q==hboGMuzmpu9XDBNM'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then(data => {
            const quote = data[0];
            thoughtElement.textContent = quote.quote;
            authorElement.textContent = quote.author;
            categoryElement.textContent = quote.category;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

updateQuote();
setInterval(updateQuote, 10000);
