const Router = require('express')
const router = new Router()
const ruleController = require('../controllers/ruleController');
const checkRole = require('../middlewares/checkRoleMiddleware')
const checkBan = require('../middlewares/checkBanMiddleware')

router.get("/", ruleController.getAllRules);
router.get("/:id", ruleController.getOneRule);
router.post("/", checkBan, checkRole(['ADMIN', 'MODER']), ruleController.createNewRule);
router.put("/:id", checkBan, checkRole(['ADMIN', 'MODER']), ruleController.updateRule);
router.delete("/:id", checkBan, checkRole(['ADMIN', 'MODER']), ruleController.deleteRule);

module.exports = router;