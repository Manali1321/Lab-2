const { request } = require("express");

//  Import Required modules
const express = require("express");
const path = require("path");

// set up express app and port number
const app = express();
const port = 8888;

// set up template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set up static file path
app.use(express.static(path.join(__dirname, 'public')));

// page routes
app.get('/', (request, response) => {
    // response.status(200).send('test Page 1');
    response.render('index', { title: 'Home' });
});

app.get('/about', (request, response) => {
    response.render('about', { title: 'About' });
});

// set up server listening
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});