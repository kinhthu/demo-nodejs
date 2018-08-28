const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.listen(3000);

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.send('<h1>hahha</h1>');
});

app.get('/tinhtong/:a/:b', (req, res) => {
    let a = req.params.a;
    a = parseInt(a);

    let b = req.params.b;
    b = parseInt(b);

    const tong = a + b;

    res.send(`<h1>${a} + ${b} = ${tong}</h1>`);
});

app.post('/login', urlencodedParser, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    res.send(`username: ${username}, password: ${password}`);
});
