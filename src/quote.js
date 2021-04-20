class Quote{
    constructor(quote, id){
        this.id = id
        this.quote = quote;
    }
// render quote instance method

    renderQuote(){
        let quoteBox = document.getElementById("quote")

        quoteBox.innerHTML +=

        `
        Quote: ${quote.id} this!
        `
    }
}
