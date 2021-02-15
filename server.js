const express = require("express");
const app = express();
const hbs = require('hbs');
let port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

// register partials
hbs.registerPartials(__dirname + '/views/partials');

// set the view engine
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    // render for render a static view
    res.render('home', {
        title: 'MERCALAND'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})


app.listen(port, () => {
    console.log(`server runnings on port: ${port}`);
});