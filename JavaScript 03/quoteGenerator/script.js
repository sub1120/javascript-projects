
const renderQuote = ({ content, author }) => {
    document.querySelector('#para').innerText = content;
    document.querySelector('#by').innerText = author;
}

const showQuote = async (event) => {

    try {
        const quoteJSON = await fetch("https://api.quotable.io/random");
        const quote = await quoteJSON.json();
        renderQuote(quote);
    }catch(error){
        console.log(error);
    }
}

document.querySelector('button').addEventListener('click', showQuote);