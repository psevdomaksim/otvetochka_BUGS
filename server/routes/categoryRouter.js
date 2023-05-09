const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController');
const checkRole = require('../middlewares/checkRoleMiddleware')
const checkBan = require('../middlewares/checkBanMiddleware')

router.get("/",checkBan, categoryController.getAllCategories);
router.get("/:id",checkBan, categoryController.getOneCategory);
router.post("/",checkBan, checkRole(['ADMIN', 'MODER']), categoryController.createNewCategory);
router.delete("/:id",checkBan, checkRole(['ADMIN', 'MODER']), categoryController.deleteCategory);

module.exports = router;