const URL = "http://api.quotable.io/random";


fetch(URL)
    .then(res => {
        if(res.ok){
            return res.json();
        }else{
            throw new Error("Something wrong with Response");
        }
    })
    .then(info => {
        console.log(info); // contains random quote from the api
    })
    .catch(error=>{
        console.log(error);
    })





