const express = require("express");
const app = express();
const router = express.Router();
const FacilidadesController = require("./controllers/FacilidadesController")
const req = require("express/lib/request");

app.set('view engine','ejs');
app.use(express.static('public'));

//Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req, res) => {

    res.render("index");
});

app.get("/app",(req, res) => {
    res.render("App.ejs");
});

app.use("/",FacilidadesController);


app.listen(8080,()=> {console.log('App rodando');});

