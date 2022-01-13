const URL = "http://api.quotable.io/random";


fetch(URL)
    .then(res => res.json())
    .then(info => {
        console.log(info); // contains random quote from the api
    })





