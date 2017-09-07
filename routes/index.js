'use strict'

const {Router} = require('express')
const router = Router()

router.use(require('./chickens'))
router.use(require('./eggs'))

router.get('/', (req, res) => {
  res.json({
    "chickens": "api/v1/see-our-chickens",
    "eggs": "api/v1/see-our-eggs"
  })
})



module.exports = router
