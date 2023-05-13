const Router = require('express')
const router = new Router()
const answerController = require('../controllers/answerController');
const checkRole = require('../middlewares/checkRoleMiddleware')
const checkBan = require('../middlewares/checkBanMiddleware')

router.get("/", answerController.getAllAnswers);
router.get("/:id", answerController.getOneAnswer);
router.post("/", checkBan, answerController.createNewAnswer);
router.delete("/:id", checkRole(['ADMIN', 'MODER']), checkBan, answerController.deleteAnswer);

module.exports = router;