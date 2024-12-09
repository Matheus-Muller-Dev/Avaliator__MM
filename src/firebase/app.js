const express = require('express');
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/menu', (req, res) => {
    res.render('menu');
});

module.exports = app;
// http://localhost:3000/
