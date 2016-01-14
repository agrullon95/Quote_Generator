$(document).ready(function() {
  generateQuote();
  $('.newQuote').on('click', generateQuote);
});

// Fetches a quote and the quote's author from Forismatic's Api
function generateQuote() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en", function(result) {
    $('.quote').html(result.quoteText);
    // Runs tweet function for each quote
    if (result.quoteAuthor == "") {
      $('.author').html("-Unknown Author");
    } else {
      $('.author').html("-" + result.quoteAuthor);
      tweet();
    }
  });
}


// Twitter function - Opens twitter and automatically copies quote for quicker tweeting
function tweet() {
  var quote = $('.quote').text();
  var author = $('.author').text();
  var link = "http://twitter.com/intent/tweet?text=" + quote + " " + author;
  console.log(link);
  $('.twitter').attr('href', link);
}
