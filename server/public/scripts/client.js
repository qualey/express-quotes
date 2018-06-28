console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('#quotesAuthors').each(handleGetQuotes);
}

function handleGetQuotes() {
    $.ajax({
        url: '/famousquotes',
        type: 'GET'
    }).done(function (response) {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            $('#quotesAuthors').append(`<li>"${response[i].quote}" <br><cite> ${response[i].author}</cite></li>`);
        }
    }).fail(function (errorResponse) {
        console.log(errorResponse);
        alert('Request failed');
    });
}