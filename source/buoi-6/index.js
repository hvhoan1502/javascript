// Khai báo thư viện
const express = require('express');

const app = express();

app.get('/ten', (request, response) => {
    response.send('Create');
});

app.post('/ten', (req, res) => {
    // Insert
    res.redirect('/ten');
});

app.listen(3000);
