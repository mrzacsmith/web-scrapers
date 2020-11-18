const express = require('express')
require('colors')

const server = express()
server.use(express.json())
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Header', 'Content-Type')
  next()
})

const path = '/api/creators/'

server.get(path, async (req, res) => {
  const creators = [
    { name: 'Code Drip', img: 'https://' },
    { name: 'Bruce Lee', img: 'https://' },
    { name: 'Code Shock', img: 'https://' },
  ]
  // todo: GET from db
  res.status(200).json(creators)
})

server.post(path, async (req, res) => {
  console.log(req.body)
  // todo: scrape channel
  // todo: add to db
  res.send('success')
})

const PORT = 5000
server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT}`.america)
})
