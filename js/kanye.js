const loadQuotes = () => {
    fetch('https://api.kanye.rest')
    .then (response => response.json())
    .then (json => displayQuotes(json))
}
// loadQuotes()
const displayQuotes = data => {
    const quoteElement = document.getElementById("textArea");
    quoteElement.innerText = data.quote;
}