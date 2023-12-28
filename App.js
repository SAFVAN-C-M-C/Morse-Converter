require("dotenv").config()
const express = require('express');
require('ejs');
const { convertToMorse, convertToText } = require("./helper/Morse");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Enable JSON parsing








//route
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/convert', (req, res) => {
    const text = req.body.text;
    const morseCode = convertToMorse(text);
    res.json({ morseCode });
});
app.post('/convertToText', (req, res) => {
    const morseCode = req.body.text; // Assuming the Morse code is sent as 'text' in the request body
    const text = convertToText(morseCode);
    res.json({ result: text });
});













app.listen(process.env.PORT || 3000, () => {
    console.log(`http://localhost:${process.env.PORT || 3000}/`);
});
