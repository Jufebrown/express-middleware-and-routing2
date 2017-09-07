'use strict'

const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.json({
    "chickens": "api/v1/see-our-chickens",
    "eggs": "api/v1/see-our-eggs"
  })
})

module.exports = router
