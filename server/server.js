const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static('./client'));

app.get('/', (req, res) => res.send('hello world'))

app.listen(PORT, () => {
    console.log(`Currently running on PORT ${PORT}`);
});

module.exports = app;
