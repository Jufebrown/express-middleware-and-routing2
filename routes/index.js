
const {Router} = require('express')
const router = Router()

router.use(require('./home'))
router.use(require('./see-our-chickens'))
router.use(require('./see-our-eggs'))

module.exports = router
