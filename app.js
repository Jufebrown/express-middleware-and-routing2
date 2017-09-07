`use strict`

const express = require('express')
const app = express()

//routes modules
const routes = require(`./routes/`)

//routes and routing
app.use(express.static(__dirname + '/public'))

app.use(routes)

app.use((req, res) => {
  res.send("Where do you think you're going?")
})


app.listen(3000, () => {
  console.log(`Server listening on port 3000`)
})
