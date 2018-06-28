console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('#quotesAuthors').append(handleGetQuotes);
    // $('.card').append(handleGetQuotes);
}

function handleGetQuotes() {
    $.ajax({
        url: '/famousquotes',
        type: 'GET'
    }).done(function (response) {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            $('#quotesAuthors').append(`<li>"${response[i].quote}" <br><cite> ${response[i].author}</cite></li>`);
            // $('.card').append(`<p>${response[i].quote}"</p> <footer>${response[i].author}</footer>`);
        }
    }).fail(function (errorResponse) {
        console.log(errorResponse);
        alert('Request failed');
    });
}