const URL = "http://api.quotable.io/random";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

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



