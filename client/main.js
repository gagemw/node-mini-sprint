$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote(){
    $.get("http://localhost:3000/quote", function(data){
      $("#quote").append(data);
    })
  }

  function addQuote(quote){
    $.post("http://localhost:3000/quote", quote, function(){
      $("#quote").append(quote);
    })
  }
});
