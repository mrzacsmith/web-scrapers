const express = require('express')
const cors = require('cors')
require('colors')

const server = express()
server.use(express.json())
server.use(cors())
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

const path = '/api/creators/'

server.get(path, async (req, res) => {
  const creators = [
    {
      name: 'Code Dripper',
      img:
        'https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Bruce Lee',
      img:
        'https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Code Shock',
      img:
        'https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'BooYah',
      img:
        'https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
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
