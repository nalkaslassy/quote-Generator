
// <div class="quote-container" id="quote-container"> We are grabbing that ID from the html page
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
// Get Quotes From API
let apiQuotes = [];
// Show new Quote
function newQuote() {
// Pick a random quote from apiQuotes Array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];  
// Check if Author field is blank and replace it with 'Unknown'
if (!quote.author){
    authorText.textContent = 'Unkown';
}
else {
    authorText.textContent = quote.author;
}
// Check quote length to determine the type of style
if (quote.text.length > 120){
    quoteText.classList.add('long-quote');

    }
    else {
        quoteText.classList.remove('long-quote');
    }

quoteText.textContent = quote.text;
}


async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
const response = await fetch(apiUrl);
apiQuotes = await response.json();
newQuote();
    } catch (error){
        //Error Handling                                                                                    
    }
}
// Tweet Quote
function tweetQuote() {
const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
window.open(twitterUrl, '_blank');
}
// Even lisiteners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
//  On Load
getQuotes();