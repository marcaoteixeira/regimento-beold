var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var router = require("./routes/routes")

app.set('view engine','ejs');
app.use(express.static('public'));
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/",router);

app.listen(8686,() => {
    console.log("Servidor rodando")
});