const Regimento = require("../models/regimento/regimento");

class RegimentoController{

   //Administração Cadastro de Dispositivos do Regimento

   async newdispositivo(req, res) {
    var list_temenda = await Emenda.tEmendafindAll();

    res.render('admin/dispositivobr/new', { t_emenda: list_temenda });
 }
 async dispositivosave(req, res) {

    var id_tipo = req.body.id_tipo;
    var emenda = req.body.emenda;
    var descricao = req.body.descricao;

    await Emenda.EmendaSave(id_tipo, emenda, descricao);
    res.redirect('new');
 }
 async editemenda(req, res) {

    var list_emenda = await Emenda.findAll()

    res.render('admin/emenda/edicao', { emendas: list_emenda });

 }
 async updateemenda(req, res) {

    var id = req.body.id;
    var list_emenda = await Emenda.findById(id)
    res.render('admin/emenda/update', { emendas: list_emenda });

 }
 async saveemenda(req, res) {
    var id = req.body.id;
    var id_tipo = req.body.id_tipo;
    var emenda = req.body.emenda
    var descricao = req.body.descricao;

    await Emenda.EmendaUpdate(id, id_tipo, emenda, descricao);
    res.redirect('edit');

 }
 async deleteemenda(req, res) {
    var id = req.body.id;
    await Emenda.EmendaDelete(id);
    res.redirect('edit');

 } 

}