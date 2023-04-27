const Regimento = require("../models/regimento/regimento");
const Titulo = require("../models/admin/titulo");

class RegimentoController{

   //Administração Cadastro de Dispositivos do Regimento

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

      res.render('admin/regimento/titulo/tituloedicao', { titulo: list_titulo });

   }
   async updatetitulo(req, res) {

      var id = req.body.id;
      var list_titulo = await Titulo.findById(id)
      res.render('admin/regimento/titulo/tituloupdate', { titulo: list_titulo });

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

}

module.exports = new RegimentoController();