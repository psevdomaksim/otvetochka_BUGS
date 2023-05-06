const Router = require('express')
const router = new Router()

const userRouter = require("./userRouter")
const questionRouter = require("./questionRouter")
const categoryRouter = require("./categoryRouter")
const answerRouter = require("./answerRouter")
const reportRouter = require("./reportRouter")

router.use('/user', userRouter )
router.use('/question', questionRouter )
router.use('/category', categoryRouter )
router.use('/answer', answerRouter )
router.use('/report', reportRouter )

module.exports = router;