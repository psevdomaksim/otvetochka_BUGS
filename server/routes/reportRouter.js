const Router = require('express')
const router = new Router()
const reportController = require('../controllers/reportController');
const checkRole = require('../middlewares/checkRoleMiddleware')
const checkBan = require('../middlewares/checkBanMiddleware')

router.get("/",checkBan, checkRole(['ADMIN', 'MODER']), reportController.getAllReports);
router.get("/question",checkBan, checkRole(['ADMIN', 'MODER']), reportController.getQuestionsReports);
router.get("/answer",checkBan, checkRole(['ADMIN', 'MODER']), reportController.getAnswersReports);
router.get("/:id",checkBan, checkRole(['ADMIN', 'MODER']), reportController.getOneReport);
router.post("/",checkBan, reportController.createNewReport);
router.delete("/:id",checkBan, checkRole(['ADMIN', 'MODER']), reportController.deleteReport);

module.exports = router;