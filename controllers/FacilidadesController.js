const Quorum = require("../models/quorum");
const Comissao = require("../models/admin/comissao.js")
const Usopalavra = require("../models/admin/usopalavra.js")
const Requerimento = require("../models/admin/requerimento.js")
const Emenda = require("../models/admin/emenda.js")
const Recurso = require("../models/admin/recurso.js")


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
      //Administração Apresentação de Emendas

    async newemenda(req, res){
        var list_temenda = await Emenda.tEmendafindAll();
        
        res.render('admin/emenda/new',{t_emenda: list_temenda});
     }
     async emendasave(req, res){
         
         var id_tipo = req.body.id_tipo;
         var emenda = req.body.emenda;
         var descricao =  req.body.descricao;
         
         await Emenda.EmendaSave(id_tipo, emenda, descricao);  
         res.redirect('new');         
     }
     async editemenda(req, res){   
        
         var list_emenda = await Emenda.findAll()
 
         res.render('admin/emenda/edicao', {emendas: list_emenda});
        
      }
      async updateemenda(req, res){

         var id = req.body.id;
         var list_emenda = await Emenda.findById(id)
         res.render('admin/emenda/update', {emendas: list_emenda});

      }
      async saveemenda(req, res){
        var id = req.body.id;
        var id_tipo = req.body.id_tipo;
        var emenda = req.body.emenda
        var descricao =  req.body.descricao;         
         
         await Emenda.EmendaUpdate(id, id_tipo, emenda, descricao);           
         res.redirect('edit');     
 
      }
      async deleteemenda(req, res){
         var  id = req.body.id;        
         await Emenda.EmendaDelete(id);
         res.redirect('edit');         
         
     }

   //Administração Apresentação de Recursos

    async newrecurso(req, res){         
      res.render('admin/recurso/new');
   }
   async recursosave(req, res){
       
       var recurso = req.body.recurso;
       var fundamento = req.body.fundamento;
       var iniciativa =  req.body.iniciativa;
       var prazo =  req.body.prazo;
       var decisao =  req.body.decisao;
       
       await Recurso.RecursoSave(recurso, fundamento, iniciativa, prazo, decisao);  
       res.redirect('new');         
   }
   async editerecurso(req, res){   
      
       var list_recurso = await Recurso.findAll()

       res.render('admin/recurso/edicao', {recursos: list_recurso});
      
    }
    async updaterecurso(req, res){

       var id = req.body.id;
       var list_recurso = await Recurso.findById(id)
       res.render('admin/recurso/update', {recursos: list_recurso});

    }
    async saverecurso(req, res){
      var id = req.body.id;
      var recurso = req.body.recurso;
      var fundamento = req.body.fundamento;
      var iniciativa =  req.body.iniciativa;
      var prazo =  req.body.prazo;
      var decisao =  req.body.decisao;         
       
       await Recurso.RecursoUpdate(id, recurso, fundamento, iniciativa, prazo, decisao);           
       res.redirect('edit');     

    }
    async deleterecurso(req, res){
       var  id = req.body.id;        
       await Recurso.RecursoDelete(id);
       res.redirect('edit');         
       
   }
   
}

module.exports = new FacilidadesController();