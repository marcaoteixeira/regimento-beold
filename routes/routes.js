var express = require("express");
var router = express.Router();
const FacilidadesController = require("../controllers/FacilidadesController");
var HomeController = require("../controllers/HomeController");


router.get('/',HomeController.index);

//Rotas de Facilidades Comissões
router.get('/facilidades',FacilidadesController.lista);
router.post('/list_quorum',FacilidadesController.quorum);

//Rotas de Facilidades Comissões
router.get('/admin/comissao/new',FacilidadesController.newcomiss);
router.post('/admin/comissao/new',FacilidadesController.comissaosave);
router.get('/admin/comissao/edit',FacilidadesController.editcomiss);
router.post('/admin/comissao/update',FacilidadesController.updatecomiss);
router.post('/admin/comissao/save',FacilidadesController.savecomiss);
router.post('/admin/comissao/delete',FacilidadesController.deletecomiss);

//Rotas de Facilidades Uso da Palavra
router.get('/admin/usopalavra/new',FacilidadesController.newpalavra);
router.post('/admin/usopalavra/new',FacilidadesController.palavrasave);
router.get('/admin/usopalavra/edit',FacilidadesController.editpalavra);
router.post('/admin/usopalavra/update',FacilidadesController.updatepalavra);
router.post('/admin/usopalavra/save',FacilidadesController.savepalavra);
router.post('/admin/usopalavra/delete',FacilidadesController.deletepalavra);

//Rotas de Facilidades Requerimentos
router.get('/admin/requerimento/new',FacilidadesController.newrequerimento);
router.post('/admin/requerimento/new',FacilidadesController.requerimentosave);
router.get('/admin/requerimento/edit',FacilidadesController.editrequerimento);
router.post('/admin/requerimento/update',FacilidadesController.updaterequerimento);
router.post('/admin/requerimento/save',FacilidadesController.saverequerimento);
router.post('/admin/requerimento/delete',FacilidadesController.deleterequerimento);

//Rotas de Facilidades Apresentação de Emenda
router.get('/admin/emenda/new',FacilidadesController.newemenda);
router.post('/admin/emenda/new',FacilidadesController.emendasave);
router.get('/admin/emenda/edit',FacilidadesController.editemenda);
router.post('/admin/emenda/update',FacilidadesController.updateemenda);
router.post('/admin/emenda/save',FacilidadesController.saveemenda);
router.post('/admin/emenda/delete',FacilidadesController.deleteemenda);
module.exports = router;

//Rotas de Facilidades Recursos

router.get('/admin/recurso/new',FacilidadesController.newrecurso);
router.post('/admin/recurso/new',FacilidadesController.recursosave);
router.get('/admin/recurso/edit',FacilidadesController.editerecurso);
router.post('/admin/recurso/update',FacilidadesController.updaterecurso);
router.post('/admin/recurso/save',FacilidadesController.saverecurso);
router.post('/admin/recurso/delete',FacilidadesController.deleterecurso);

module.exports = router;
