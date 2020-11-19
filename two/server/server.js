require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
require('colors')

const scraper = require('./scraper')
const connectDB = require('./utils/db.js')
const Channel = require('./models/Channels.js')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

connectDB()
const path = '/api/creators/'

server.get(path, async (req, res) => {
  Channel.find(req.query, (err, data) => {
    if (err) res.status(500).send(err)
    else res.status(200).json(data)
  })
  // const creators = [
  //   {
  //     name: 'Code Dripper',
  //     img:
  //       'https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  //   },
  //   {
  //     name: 'Bruce Lee',
  //     img:
  //       'https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  //   },
  //   {
  //     name: 'Code Shock',

  //     img:
  //       'https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  //   },
  //   {
  //     name: 'BooYah',
  //     img:
  //       'https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  //   },
  // ]
  // todo: GET from db
  res.status(200).json(creators)
})

server.post(path, async (req, res) => {
  // console.log(req.body)
  try {
    const { name, avatarUrl } = await scraper.scrapeChannel(
      req.body.channelValue
    )
    console.log('channel data', name, avatarUrl)
    const newChannel = new Channel({
      name,
      avatar: avatarUrl,
    })

    await newChannel.save()
  } catch (error) {
    console.log(error.message)
  }
  // todo: add to db
  res.send('success')
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT}`.america)
})
