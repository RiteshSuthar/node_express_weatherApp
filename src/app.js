const { AsyncResource } = require('async_hooks');
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const static_path = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

console.log(partialsPath);

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(static_path));
app.get('/',(req, res) => {
    res.render("index");
})

app.get('/about', (req, res) => {
    res.render("about");
})
app.get('/weather',(req, res) => {
    res.render("weather");
})

app.get('*', (req, res) => {
    res.render("404error");
})
app.listen(8000, () => {
    console.log('Listening to port 8000');
})