document.addEventListener("DOMContentLoaded", () => {
  //quotes load as soon as DOM is complete
  fetchQuotes()
})

const BASE_URL = ("http://127.0.0.1:3000/")

// AJAX requests needed

// read - fetch quotes index
function fetchQuotes(){
  fetch(`${BASE_URL}/quotes`)
  .then(resp => resp.json())
  .then(quotes => {
  // for (const quote of quotes){
    // console.log("rails obj", quote)
    // let u = new Quote(quote.quote)
    // u.renderQuote();
    // console.log("js object", quote)
  
    const quote = quotes[Math.floor(Math.random() * quotes.length)]
    u = new Quote(quote.quote)
    u.renderQuote()
})
}

function fetchCharacter(){
  fetch(`${BASE_URL}/characters`)
  .then(resp => resp.json())
  .then(qcharacters => {
    const character = 
  })
}