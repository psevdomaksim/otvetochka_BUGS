const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')
const checkRole = require('../middlewares/checkRoleMiddleware')
const checkBan = require('../middlewares/checkBanMiddleware')

router.get("/auth",authMiddleware, userController.checkAuth );
router.get("/",checkBan, userController.getAllUsers );
router.get("/:id", userController.getOneUser );
router.post("/registration", userController.registration );
router.post("/login", userController.login);
router.delete("/:id",checkBan,checkRole(['ADMIN']), userController.deleteUser);
router.put("/:id",checkBan, userController.updateUser);
router.put("/role/:id", checkBan, checkRole(['ADMIN']), userController.changeUserRole);


module.exports = router;