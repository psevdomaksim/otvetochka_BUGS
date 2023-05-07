const Router = require('express')
const router = new Router()
const answerLikeController = require('../controllers/answerLikeController');
//const checkRole = require('../middleware/checkRoleMiddleware')

router.get("/", answerLikeController.getAllAnswerLikes);
router.get("/:id", answerLikeController.getOneAnswerLike);
router.post("/", answerLikeController.createNewAnswerLike);
router.delete("/:id", answerLikeController.deleteAnswerLike);

module.exports = router;