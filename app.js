const URL = "https://api.quotable.io/random";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

/* 
fetch(URL)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Something wrong with Response");
        }
    })
    .then(info => {
        quote.textContent = `"${info.content}"`
        author.textContent = `- ${info.author}`
    })
    .catch(error => {
        console.log(error);
    }) 

*/

async function getQuote() {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error("Something Wrong With Response");
    }
    const data = await response.json();
    return data;
}

getQuote().then((quoteObj) => {
    quote.textContent = `"${quoteObj.content}"`
    author.textContent = `- ${quoteObj.author}`
}).catch((error) => {
    console.log(error);
})

const btnStop = document.querySelector(".btn-stop");
const btnStart = document.querySelector(".btn-start");

const TIME = 10000;

let id = setInterval(() => {
    getQuote().then((quoteObj) => {
        quote.textContent = `"${quoteObj.content}"`
        author.textContent = `- ${quoteObj.author}`
    }).catch((error) => {
        console.log(error);
    })
}, TIME);

btnStart.addEventListener("click", () => {
    id = setInterval(() => {
        getQuote().then((quoteObj) => {
            quote.textContent = `"${quoteObj.content}"`
            author.textContent = `- ${quoteObj.author}`
        }).catch((error) => {
            console.log(error);
        })
    }, TIME);
})

btnStop.addEventListener("click", () => {
    clearInterval(id);
})

