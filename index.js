const express = require("express");
const app = express();

const routes = require('./routes');

app.get('/', (req, res) => {
    res.send('Hello Good Day!!');
});

app.get('/hi/:name', (req, res) => {
    const name = req.params.name ? req.params.name : null;
    if(name) {
        res.send('Hello Good Day ' + req.params.name);
    } else {
        res.send('Hello Good Day !!');
    }
});

app.post('/hello', (req, res) => {
    res.send('Hello Good Day!!');
});

app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });


// app.use('/app', routes);
app.listen(3000);