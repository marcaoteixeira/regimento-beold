var quorum = require("../models/quorum");

class FacilidadesController{
    async lista(req, res){
        var list_quorum = await quorum.findAll();
        //.then(data => {
            //console.log(data);
          //  res.render("../quorum/quorum", {comissoes: data});
        // });
        res.render('quorum/quorum', {comissoes: list_quorum});               
    }
    async quorum(req, res){
        var comissao = req.body.comissao;
        var list_comiss = await  quorum.findById(comissao);
        res.render('quorum/list_quorum', {comissoes: list_comiss});
        //res.send(list_comiss);
    }
    async newcomiss(req, res){
        var comissao = req.body.comissao;
        var sigla  = req.body.comissao;
        var membros = req.body.comissao;
        var abertura  = req.body.comissao;
        var absoluto = req.body.comissao;
        var umdecimo = req.body.comissao;
        var seisdecimos = req.body.comissao;

        res.render('admin/comissao/new');
    }
   
}

module.exports = new FacilidadesController();