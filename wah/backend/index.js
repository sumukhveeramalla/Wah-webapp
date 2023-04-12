const express = require('express')
const app = express()
const port = 4000
const mongoDB = require("./db")

mongoDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
})