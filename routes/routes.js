var express = require("express");
var router = express.Router();
const FacilidadesController = require("../controllers/FacilidadesController");
var HomeController = require("../controllers/HomeController");


router.get('/',HomeController.index);

//Rotas de Facilidades Comissões
router.get('/facilidades',FacilidadesController.lista);
router.post('/list_quorum',FacilidadesController.quorum);
router.get('/admin/comissao/new',FacilidadesController.newcomiss);
router.post('/admin/comissao/new',FacilidadesController.comissaosave);
router.get('/admin/comissao/edit',FacilidadesController.editcomiss);
router.post('/admin/comissao/update',FacilidadesController.updatecomiss);
router.post('/admin/comissao/save',FacilidadesController.savecomiss);
router.post('/admin/comissao/delete',FacilidadesController.deletecomiss);

//Rotas de Facilidades Uso da Palavra
router.get('/admin/usopalavra/new',FacilidadesController.newpalavra);
router.post('/admin/usopalavra/new',FacilidadesController.palavrasave);
router.get('/admin/usopalavra/edit',FacilidadesController.editcomiss);
router.post('/admin/usopalavra/update',FacilidadesController.updatecomiss);
router.post('/admin/usopalavra/save',FacilidadesController.savecomiss);
router.post('/admin/palavra/delete',FacilidadesController.deletecomiss);


module.exports = router;
