quoteList = [
    {
        quote:"The purpose of our lives is to be happy.",
        by:"Dalai Lama"
    },
    {
        quote:"Life is what happens when you're busy making other plans.",
        by:"John Lennon"
    },
    {
        quote:"Get busy living or get busy dying.",
        by:"Stephen King"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        by:"Mae West"
    },
    {
        quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        by:"Thomas A. Edison"
    },
    {
        quote:"Never let the fear of striking out keep you from playing the game.",
        by:"Babe Ruth"
    },
    {
        quote:"Money and success don’t change people; they merely amplify what is already there.",
        by:"Will Smith"
    },
    {
        quote:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
        by:"Steve Jobs"
    },
    {
        quote:"Not how long, but how well you have lived is the main thing.",
        by:"Seneca"
    },
    {
        quote:"If life were predictable it would cease to be life, and be without flavor.",
        by:"Eleanor Roosevelt"
    },
    {
        quote:"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
        by:"Henry Ford"
    },
]

const showQuote = (event) => {
    const totalQuotes = quoteList.length;
    const randomIndex = Math.floor(Math.random()*(totalQuotes - 1))

    document.querySelector('q').innerText = quoteList[randomIndex].quote
    document.querySelector('.by').innerText = `- ${quoteList[randomIndex].by}`
}

document.querySelector('button').addEventListener('click', showQuote);