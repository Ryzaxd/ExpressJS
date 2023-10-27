const express = require('express')
const app = express()
const port = 3000

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.get('/hest', (_, res) => {
  res.send('<h1>Hej med dig jeg er en hest</h1>')
})

app.get('/api/hest', (_, res) => {
  res.send({ hest : 'hest' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})