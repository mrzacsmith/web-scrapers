require('dotenv').config()
const Twitter = require('twitter')

// connect to twitter api
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

// pull next tweet from spreadsheet

// send tweet

// remove tweet from spreadsheet
