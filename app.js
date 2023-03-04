const express = require('express');
require('dotenv').config();
const nodeHtmlToImage = require('node-html-to-image')
const bodyParser = require("body-parser");
const fs = require("fs");
const { getHtml } = require('./utils/Template');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const image = fs.readFileSync('./Logo128.png');
const base64Image = new Buffer.from(image).toString('base64');
const dataURI = 'data:image/jpeg;base64,' + base64Image

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    const { content } = req.body;

    const dateTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }).replace(/,/g, '').replace(/\//g, '-').replace(/ /g, '-').replace(/:/g, '-');

    nodeHtmlToImage({
        output: `./${dateTime}.png`,
        html: getHtml(content.split(/\r?\n/)),
        content: { imageSource: dataURI }
    })
        .then(() => {
            console.log('The image ' + dateTime + '.png created successfully!')
            res.download(__dirname + `/${dateTime}.png`);
        })
        .catch(error => {
            console.error(error)
            res.send(error);
        });
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});