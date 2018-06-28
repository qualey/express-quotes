const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));


let quotesAndAuthors = [{
    quote: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle. As with all matters of the heart, you\'ll know when you find it.',
    author: 'Steve Jobs'
}, {
    quote: 'Great things are done by a series of small things brought together.',
    author: 'Vincent Van Gogh',
}, {
    quote: 'Never, never, never give up.',
    author: 'Winston Churchill'
}]; //end array of quotes and authors


app.get('/famousquotes', function (req, res) {
    res.send(quotesAndAuthors);
});

app.listen(PORT, function () {
    console.log('App is running on ', PORT);
});