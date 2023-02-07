const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req,res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight / (height * height);
    res.send("<h1>Your BMI is : " + Math.floor(result) + "</h1>");
})

app.listen(port, () => {
    console.log("App is listening on port " + port);
})