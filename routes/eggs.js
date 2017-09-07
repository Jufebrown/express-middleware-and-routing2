'use strict'

const {Router} = require('express')
const router = Router()

router.get('/see-our-eggs', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public' + '/see-our-eggs.html'))
})

module.exports = router
