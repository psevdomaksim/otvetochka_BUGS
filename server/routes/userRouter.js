const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')
//const checkRole = require('../middleware/checkRoleMiddleware')

router.get("/auth",authMiddleware, userController.checkAuth );
router.get("/", userController.getAllUsers );
router.get("/:id", userController.getOneUser );
router.post("/registration", userController.registration );
router.post("/login", userController.login);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.updateUser);

module.exports = router;