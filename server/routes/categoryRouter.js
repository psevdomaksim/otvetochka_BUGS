const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController');
//const checkRole = require('../middleware/checkRoleMiddleware')

router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getOneCategory);
router.post("/", categoryController.createNewCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;