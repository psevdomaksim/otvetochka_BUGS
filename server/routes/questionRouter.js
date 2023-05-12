const Router = require('express')
const router = new Router()
const questionController = require('../controllers/questionController');
const checkRole = require('../middlewares/checkRoleMiddleware')
const checkBan = require('../middlewares/checkBanMiddleware')

router.get("/", questionController.getAllQuestions);
router.get("/:id", questionController.getOneQuestion);
router.post("/",checkBan, questionController.createNewQuestion);
router.delete("/:id",checkBan, checkRole(['ADMIN', 'MODER']), questionController.deleteQuestion);

module.exports = router;