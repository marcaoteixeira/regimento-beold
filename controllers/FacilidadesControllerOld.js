const express = require("express");
const router = express.Router();
const database = require("../database/database");


router.get("/facilidades", (req, res) => {
    res.render("facilidades")
});

//router.get("/quorum",(req, res) => {
    //var comissoes = [];
  //  database.select("*").table("tab_quorum").then(data => {
        //console.log(data);
    //    res.render("quorum", {comissoes: data});
    //});
//}); 

router.get("/quorum",(req, res) => {4
    //var comissoes = [];
    database.select("*").table("tab_comissao").then(data => {
        //console.log(data);
        res.render("quorum/quorum", {comissoes: data});
    });
}); 

router.post("/list_quorum", (req, res) => {
    var comissao = req.body.comissao;

    database.where({id: comissao}).table("tab_comissao").then(data => {
        res.render("quorum/list_quorum", {comissoes: data});    
    });
}); 
router.get("/admin/comissao/new", (req, res) => {
    res.render("admin/comissao/new");
}); 


module.exports = router;