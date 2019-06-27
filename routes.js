const express = require('express');
const router =  express.Router();

router.get('/', (req, res) => {
    res.send('Hello Good Day!!');
});

router.get('/hi/:name', (req, res) => {
    const name = req.params.name ? req.params.name : null;
    if(name) {
        res.send('Hello Good Day ' + req.params.name);
    } else {
        res.send('Hello Good Day !!');
    }
});

router.post('/hello', (req, res) => {
    res.send('Hello Good Day!!');
});

router.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

module.exports = router;