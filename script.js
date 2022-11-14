// Quote array
const quotes = [

]

// New quote function
function newQuote(){
    const randomNumber = Math.floor(Math.random() * (quotes.length));
   // Placement of the quote into the HTML display element
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]; 
}






