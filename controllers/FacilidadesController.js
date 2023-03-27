var Quorum = require("../models/quorum");
var Comissao = require("../models/admin/comissao.js")

class FacilidadesController{
    async lista(req, res){
        var list_quorum = await Quorum.findAll();
        
        //.then(data => {
            //console.log(data);
          //  res.render("../quorum/quorum", {comissoes: data});
        // });
        res.render('quorum/quorum', {comissoes: list_quorum});               
    }
    async quorum(req, res){
        var comissao = req.body.comissao;
        var list_comiss = await   Quorum.findById(comissao);
        res.render('quorum/list_quorum', {comissoes: list_comiss});
        //res.send(list_comiss);
    }
    async newcomiss(req, res){
        
       res.render('admin/comissao/new');
    }
    async comissaosave(req, res){
        
        var comissao = req.body.comissao;
        var sigla  = req.body.sigla;
        var membros = req.body.membros;

        await Comissao.ComissSave(comissao,sigla,membros);      
    }
    async update(req, res){   
       
        var list_comiss = await Comissao.findAll()

        res.render('admin/comissao/update', {comissoes: list_comiss});

     }
   
}

module.exports = new FacilidadesController();