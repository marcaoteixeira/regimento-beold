const Regimento = require("../models/regimento/regimento");
const Titulo = require("../models/admin/titulo");
const Capitulo = require("../models/admin/capitulo");

class RegimentoController{

   //Administração Cadastro Titulo do Regimento

   async newtitulo(req, res) {

      res.render('admin/regimento/titulonew');
   }
   async titulosave(req, res) {

      var titulo = req.body.titulo;
      
      await Titulo.TituloSave(titulo);
      res.redirect('new');
   }
   async edittitulo(req, res) {

      var list_titulo = await Titulo.findAll()

      res.render('admin/regimento/tituloedicao', { titulo: list_titulo });

   }
   async updatetitulo(req, res) {

      var id = req.body.id;
      var list_titulo = await Titulo.findById(id)
      res.render('admin/regimento/tituloupdate', { titulo: list_titulo });

   }
   async savetitulo(req, res) {
      var id = req.body.id
      var titulo = req.body.titulo;
      
      await Titulo.TituloUpdate(id, titulo);
      
      res.redirect('edit');

   }
   async deletetitulo(req, res) {
      var id = req.body.id;
      await Titulo.TituloDelete(id);
      res.redirect('edit');

   }

   //Administração Cadastro Capitulo do Regimento

   async newcapitulo(req, res) {
      var list_titulo = await Capitulo.tfindAll();
      res.render('admin/regimento/capitulonew',{titulo: list_titulo});
   }
   async capitulosave(req, res) {

      var id_titulo = req.body.id_titulo
      var capitulo = req.body.capitulo;
      
      await Capitulo.CapituloSave(id_titulo, capitulo);
      res.redirect('new');
   }
   async selecttitulo(req, res) {
      var list_titulo = await Capitulo.tfindAll();
      res.render('admin/regimento/capituloselect',{titulo: list_titulo});

   }
   async editcapitulo(req, res) {

      var id_titulo = req.body.id_titulo;
      var list_capitulo = await Capitulo.findAll(id_titulo);

      res.render('admin/regimento/capituloedicao',{ capitulo: list_capitulo });

   }
   async updatecapitulo(req, res) {

      var id = req.body.id;
      var list_capitulo = await Capitulo.findById(id)
      res.render('admin/regimento/capituloupdate', { capitulo: list_capitulo });

   }
   async savecapitulo(req, res) {
            
      var id = req.body.id;
      var capitulo = req.body.capitulo;
      
      await Capitulo.CapituloUpdate(id, capitulo);
      
      res.redirect('select');

   }
   async deletecapitulo(req, res) {
      var id = req.body.id;
      await Capitulo.CapituloDelete(id);
      res.redirect('select');

   }

}

module.exports = new RegimentoController();