const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const copy = document.getElementById('copy');
const new_quote_button = document.getElementById('new-quote');
//fetching data from the API
async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
//changing the quote
async function changeQuote() {
    let data = await getData();
    if (data) {
        console.log(data);
        quote.innerText = data.data.content; 
        author.innerText = data.data.author;
    } else {
        quote.innerText = "Failed to load quote.";
        author.innerText = "";
    }
}
//button action
new_quote_button.addEventListener('click', changeQuote);


//copy to clipboard
function copyToClipboard() {
    const text = document.getElementById("full-quote").innerText;
    navigator.clipboard.writeText( text );
    alert("Copied the text: ");
}

copy.addEventListener('click', copyToClipboard);

//to change background image
const changeBackground = document.getElementById('background');
changeBackground.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('image5.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
});

// exporting the quote in text format 
const exportQuote = document.getElementById('export');
exportQuote.addEventListener('click', () => {
    const text = document.getElementById("full-quote").innerText;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "quote.txt");
});