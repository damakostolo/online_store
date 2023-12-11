const Router = require('express')
const router = new Router()
const userConrroller = require('../controlees/userConrroller')
const authMiddleware = require('../middeleware/authMiddleware')

router.post('/registration', userConrroller.regisration)
router.post('/login', userConrroller.login)
router.get('/auth', authMiddleware,  userConrroller.check)

module.exports = router