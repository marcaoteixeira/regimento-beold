const express = require("express");
const FacilidadesController = require("../controllers/FacilidadesController");
const router = express.Router();
const HomeController = require("../controllers/HomeController");


router.get('/',HomeController.index);
router.get('/facilidades',FacilidadesController.lista);
router.get('/admin/comissao/new',FacilidadesController.newcomiss);
router.post('/admin/comissao/save',FacilidadesController.newcomiss)
router.post('/list_quorum',FacilidadesController.quorum);

module.exports = router;
