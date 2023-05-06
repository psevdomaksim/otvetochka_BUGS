const Router = require('express')
const router = new Router()
const questionController = require('../controllers/questionController');
//const checkRole = require('../middleware/checkRoleMiddleware')

router.get("/", questionController.getAllQuestions);
router.get("/:id", questionController.getOneQuestion);
router.post("/", questionController.createNewQuestion);
router.delete("/:id", questionController.deleteQuestion);

module.exports = router;