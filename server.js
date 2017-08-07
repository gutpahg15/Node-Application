const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
res.render('home.hbs', {
  pageTitle : 'Home Page',
  Welcome : 'Welcome to homepage'
});
});

app.get('/about', (req, res) => {
res.render('about.hbs', {
  pageTitle : 'About This Page',
  Welcome : 'Welcome to about page'
});
});

app.get('/bad', (req, res) => {
res.send({errorMessage : 'Unable to load the data'});
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
