const Router = require('express')
const router = new Router()
const banController = require('../controllers/banController');
const checkRole = require('../middlewares/checkRoleMiddleware');
const checkBan = require('../middlewares/checkBanMiddleware');


router.get("/", checkBan, checkRole(['ADMIN', 'MODER']), banController.getAllBans);
router.get("/:id", checkBan, checkRole(['ADMIN', 'MODER']), banController.getOneBan);
router.post("/", checkBan, checkRole(['ADMIN', 'MODER']), banController.createNewBan);
router.delete("/:id", checkBan, checkRole(['ADMIN', 'MODER']), banController.deleteBan);

module.exports = router;