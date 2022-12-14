const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const details = require('./data/details.json');

app.get('/', (req, res) => {
    res.send('server is running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const subjectDetails = details.find(subject => subject.id == id)
    res.send(subjectDetails)
})

app.listen(port, () => {
    console.log('server is running  port', port)
})