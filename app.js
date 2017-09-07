`use strict`

const express = require('express')
const app = express()

const routes = require('./routes/')


const makeEgg = () => {
  console.log('        ,ggadddd8888888bbbbaaa,_\n     ,ad888,      `Y88,      `Y888baa,\n   ,dP"  "Y8b,      `"Y8b,      `"Y8888ba,\n  ,88      "Y88b,      `"Y8ba,       `"Y88Ya,\n ,P88b,      `"Y88b,       `"Y8ba,_       ""8a,\n,P\'"Y88b,        "Y88b,        `"Y8ba,_      `Ya,\n8\'    "Y88b,        ""Y8ba,         ""Y8ba,_   `8,\n8b       "Y88b,         ""Y8ba,_         ""Y88baaY\n88b,        "Y88ba,         ""Y88ba,_         `""P\n8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P\'\n`b,"Y88ba,         ""Y88baa,_         """Y888bd"\n `b, `"Y88ba,_         ""Y888baa,_         ,8"\n  `8,   `""Y88ba,_         `"""Y8888baaaaaP"\n   `Ya,     `""Y888ba,_           `"d88P"\n     `"Yb,,_     `""Y888baa,__,,adP""\'\n         `"""YYYY8888888PPPP"""\'')
}

const checkForEgg = (req, res) => {
  if(req.route.path.indexOf("egg") != -1) {
    makeEgg()
  }
}

app.use('/api/v1/', routes)

//routes and routing
app.use((req, res) => {
  res.send('<img src="https://http.cat/404.jpg">')
})


app.listen(3000, () => {
  console.log(`Server listening on port 3000`)
})
