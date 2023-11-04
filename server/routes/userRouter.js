const Router = require('express')
const router = new Router()
const userConrroller = require('../controlees/userConrroller')

router.post('/registration', userConrroller.regisration)
router.post('/login', userConrroller.login)
router.get('/auth', userConrroller.check)

module.exports = router