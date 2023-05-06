const Router = require('express')
const router = new Router()
const answerController = require('../controllers/answerController');
//const checkRole = require('../middleware/checkRoleMiddleware')

router.get("/", answerController.getAllAnswers);
router.get("/:id", answerController.getOneAnswer);
router.post("/", answerController.createNewAnswer);
router.delete("/:id", answerController.deleteAnswer);

module.exports = router;