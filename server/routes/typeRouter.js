const Router = require('express')
const router = new Router()
const typeController = require('../controlees/typeController')
const checkRole = require('../middeleware/chekRoleMiddleware')

router.post('/', checkRole('ADMIN') ,typeController.create)
router.get('/', typeController.getAll)

module.exports = router