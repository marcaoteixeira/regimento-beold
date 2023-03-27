var express = require("express");
const FacilidadesController = require("../controllers/FacilidadesController");
var router = express.Router();
var HomeController = require("../controllers/HomeController");


router.get('/',HomeController.index);
router.get('/facilidades',FacilidadesController.lista);
//router.get('/admin/comissao/new',FacilidadesController.newform);
router.get('/admin/comissao/new',FacilidadesController.newcomiss);
router.post('/admin/comissao/new',FacilidadesController.comissaosave);
router.post('/list_quorum',FacilidadesController.quorum);
router.get('/admin/comissao/edit',FacilidadesController.update);


module.exports = router;
