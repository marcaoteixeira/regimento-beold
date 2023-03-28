var express = require("express");
var router = express.Router();
const FacilidadesController = require("../controllers/FacilidadesController");
var HomeController = require("../controllers/HomeController");


router.get('/',HomeController.index);
//Rotas de Facilidades Comissão
router.get('/facilidades',FacilidadesController.lista);
router.post('/list_quorum',FacilidadesController.quorum);
router.get('/admin/comissao/new',FacilidadesController.newcomiss);
router.post('/admin/comissao/new',FacilidadesController.comissaosave);
router.get('/admin/comissao/edit',FacilidadesController.edit);
router.get('/admin/comissao/update',FacilidadesController.update);
//router.post('/admin/comissao/update'FacilidadesController.)
//router.post('/admin/comissao/delet',FacilidadesController.quorum);


module.exports = router;
