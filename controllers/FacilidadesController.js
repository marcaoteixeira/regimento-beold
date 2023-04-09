const Quorum = require("../models/quorum");
const Comissao = require("../models/admin/comissao.js")
const Usopalavra = require("../models/admin/usopalavra.js")
const Requerimento = require("../models/admin/requerimento.js")

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
        
    }

    // Administração Comissões

    async newcomiss(req, res){
        
       res.render('admin/comissao/new');
    }
    async comissaosave(req, res){
        
        var comissao = req.body.comissao;
        var sigla  = req.body.sigla;
        var membros = req.body.membros;

        await Comissao.ComissSave(comissao,sigla,membros);      
    }
    async editcomiss(req, res){   
       
        var list_comiss = await Comissao.findAll()

        res.render('admin/comissao/edicao', {comissoes: list_comiss});

     }
     async updatecomiss(req, res){
        var comissao = req.body.comissao;
        var list_comiss = await Comissao.findById(comissao)
        res.render('admin/comissao/update', {comissoes: list_comiss});
     }
     async savecomiss(req, res){
        var id = req.body.id
        var comissao = req.body.comissao;
        var sigla  = req.body.sigla;
        var membros = req.body.membros;

        await Comissao.ComissUpdate(id, comissao, sigla, membros);           

     }
     async deletecomiss(req, res){
        var  id = req.body.comissao;        
        //var list_comiss = await Comissao.findAll()
        await Comissao.ComissDelete(id);
        res.redirect('edit');         
        
    }

    //Administração uso da palavra

    async newpalavra(req, res){
        
        res.render('admin/usopalavra/new');
     }
     async palavrasave(req, res){
         
         var evento = req.body.evento;
         var destinatario =  req.body.destinatario;
         var tempo = req.body.tempo;
         var fundamento = req.body.fundamento
 
         await Usopalavra.PalavraSave(evento, destinatario, tempo, fundamento);  
         res.redirect('new');         
     }
     async editpalavra(req, res){   
        
         var list_comiss = await Usopalavra.findAll()
 
         res.render('admin/usopalavra/edicao', {palavras: list_comiss});
 
      }
      async updatepalavra(req, res){

         var id = req.body.id;
         var list_palavra = await Usopalavra.findById(id)
         res.render('admin/usopalavra/update', {palavras: list_palavra});

      }
      async savepalavra(req, res){
        var id = req.body.id
        var evento = req.body.evento;
        var destinatario =  req.body.destinatario;
        var tempo = req.body.tempo;
        var fundamento = req.body.fundamento
 
         await Usopalavra.PalavraUpdate(id, evento, destinatario, tempo, fundamento);           
         res.redirect('edit');     
 
      }
      async deletepalavra(req, res){
         var  id = req.body.id;        
         await Usopalavra.PalavraDelete(id);
         res.redirect('edit');         
         
     }
    
    //Administração requerimentos

    async newrequerimento(req, res){
        
        res.render('admin/requerimento/new');
     }
     async requerimentosave(req, res){
         
         var requerimento = req.body.requerimento;
         var fundamento = req.body.fundamento
         var autor =  req.body.autor;         
         var obs = req.body.obs;
         
 
         await Requerimento.RequerimentoSave(requerimento, fundamento, autor, obs);  
         res.redirect('new');         
     }
     async editrequerimento(req, res){   
        
         var list_reque = await Requerimento.findAll()
 
         res.render('admin/requerimento/edicao', {requerimento: list_reque});
        
      }
      async updaterequerimento(req, res){

         var id = req.body.id;
         var list_reque = await Requerimento.findById(id)
         res.render('admin/requerimento/update', {requerimento: list_reque});

      }
      async saverequerimento(req, res){
        
        var id = req.body.id
        var requerimento = req.body.requerimento;
        var fundamento = req.body.fundamento
        var autor =  req.body.autor;         
        var obs = req.body.obs;
 
         await Requerimento.RequerimentoUpdate(id, requerimento, fundamento, autor, obs);           
         res.redirect('edit');     
 
      }
      async deleterequerimento(req, res){
         var  id = req.body.id;        
         await Requerimento.RequerimentoDelete(id);
         res.redirect('edit');         
         
     }
     
   
}

module.exports = new FacilidadesController();