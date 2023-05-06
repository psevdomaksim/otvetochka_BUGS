const Router = require('express')
const router = new Router()
const reportController = require('../controllers/reportController');
//const checkRole = require('../middleware/checkRoleMiddleware')

router.get("/", reportController.getAllReports);
router.get("/:id", reportController.getOneReport);
router.post("/", reportController.createNewReport);
router.delete("/:id", reportController.deleteReport);

module.exports = router;