const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Yea yea yea'));

app.listen(3000, () => console.log('App listening on 3k'));