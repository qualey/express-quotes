console.log('js');

$(document).ready(readyNow);

class quotesAndAuthors{
    constructor(quote, author){
        this.quote = quote;
        this.author = author;
    }
}

function readyNow() {
    console.log('JQ');
    $('#quotesAuthors').append(handleGetQuotes);
    clickHandler();
    // $('.card').append(handleGetQuotes);
}

function clickHandler() {
    $('#submitBtn').on('click', addQuote);
}

function handleGetQuotes() {
    $.ajax({
        url: '/famousquotes',
        type: 'GET'
    }).done(function (response) {
        console.log(response);
        $('#quotesAuthors').empty();
        for (let i = 0; i < response.length; i++) {
            $('#quotesAuthors').append(`<li>"${response[i].quote}" <br><cite> ${response[i].author}</cite></li>`);
            // $('.card').append(`<p>${response[i].quote}"</p> <footer>${response[i].author}</footer>`);
        }
    }).fail(function (errorResponse) {
        console.log(errorResponse);
        alert('Request failed');
    });
}

function addQuote() {
    console.log('Clicked submit');
    let quote = $('#quote').val();
    let author = $('#author').val();

    $.ajax({
        url : '/famousquotes',
        method : 'POST',
        data : {
            quote: quote,
            author: author,
        }
    }).done(function(response) {
        console.log(response);
        handleGetQuotes();
    });
}

