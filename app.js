`use strict`

const express = require('express')
const app = express()
const path = require('path')

//routes and routing
app.get('/', (req, res, next) => {
   res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/see-our-chickens', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/public' + '/see-our-chickens.html'));
})



app.use((req, res) => {
  res.send("Where do you think you're going?")
})


app.listen(3000, () => {
  console.log(`Server listening on port 3000`)
})
