function updateBackgroundImage() {
    const imageIndexArray = [10, 11, 14, 29, 37, 44, 49, 58, 61, 83, 84, 85, 95, 100, 98, 101, 107, 108, 116, 124, 131, 135, 141, 152, 155]; // Array of image IDs or indices

    const randomIndex = Math.floor(Math.random() * imageIndexArray.length);
    const randomImageId = imageIndexArray[randomIndex];

    const imageUrl = `https://picsum.photos/id/${randomImageId}/1080/720`;

    const updateBackground = () => {
        document.documentElement.style.setProperty('--background', `url("${imageUrl}")`);
    };

    setTimeout(updateBackground, 0);
}

updateBackgroundImage();
setInterval(updateBackgroundImage, 60000);




function updateQuote() {
    const thoughtElement = document.querySelector('.thought');
    const authorElement = document.querySelector('.author');
    const categoryElement = document.querySelector('.category');
  
    const categories = ['success', 'money', 'life', 'faith', 'failure', 'communications', 'humor'];
    const category = categories[Math.floor(Math.random() * categories.length)];
  
    fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'YGt5VMtbCqFOC2TLzH3/kg==rl6owKbAWCvwhkyF',
        'Content-Type': 'application/json'
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
  setInterval(updateQuote, 60001);
  