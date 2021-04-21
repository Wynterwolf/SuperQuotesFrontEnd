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
    for (const quote of quotes){
      // console.log("rails obj", quote)
      let u = new Quote(quote.id, quote.quote)
      u.renderQuote();
      // console.log("js object", quote)
    }
  })
}
//create - create a new quote

// delete - delete a quote