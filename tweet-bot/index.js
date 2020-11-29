require('dotenv').config()
const Twitter = require('twitter')
const Sheet = require('./sheet.js')
const { GoogleSpreadsheet } = require('google-spreadsheet')

const runTwitter = async () => {
  // connect to twitter api
  const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  })

  // pull next tweet from spreadsheet
  const sheet = new Sheet()
  await sheet.load()

  const js_bytes = await sheet.getRows()
  const status = js_bytes[0].code_bytes

  copyTweet(status)

  // send tweet

  client.post(
    'statuses/update',
    {
      status,
    },
    function (error, tweet, response) {
      if (error) throw error
      console.log(tweet)
    }
  )

  // // remove tweet from spreadsheet
  await js_bytes[0].delete()
  console.log('tweeted =>', js_bytes[0].code_bytes)
}

const copyTweet = async (status) => {
  const doc1 = new GoogleSpreadsheet(
    '1YOYksCq2TJ4zz9qRERPEgjhECmIzkrdVSvFk6XsPkhc'
  )
  await doc1.useServiceAccountAuth(require('./creds.json'))
  await doc1.loadInfo()
  console.log(doc1.title)

  const sht = doc1.sheetsByIndex[0]
  const addBckup = await sht.addRow({ code_bytes: status })
}

runTwitter()
