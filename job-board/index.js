const Sheet = require('./sheet.js')
const fetch = require('node-fetch')

const run = async () => {
  const sheet = new Sheet()
  await sheet.load()

  const res = await fetch(
    `https://jobs.github.com/positions.json?description=javascript&location=remote`
  )
  const json = await res.json()

  console.log({ json })
}

run()
