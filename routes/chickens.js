'use strict'

const {Router} = require('express')
const router = Router()

router.get('/see-our-chickens', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public' + '/see-our-chickens.html'))
})

module.exports = router
