const express = require('express');
const app = express();
 
app.use(express.static('public'));

// our first Route
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// cat route:
app.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/cat-page.html'));

app.listen(3000, () => console.log('Listening on port 3000! '));