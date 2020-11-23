const Sheet = require('./sheet.js')
const fetch = require('node-fetch')
require('colors')

const scrapePage = async (i) => {
  const res = await fetch(
    `https://jobs.github.com/positions.json?page=${i}&search=react`
  )
  const json = await res.json()

  const rows = json.map((job) => {
    return {
      company: job.company,
      title: job.title,
      location: job.location,
      date: job.created_at,
      url: job.url,
    }
  })

  return rows
}

const run = async () => {
  let i = 1
  let rows = []
  while (true) {
    const newRows = await scrapePage(i)
    if (newRows.length === 0) break
    console.log(i, 'new row length'.america, newRows.length)

    rows = [...rows, ...newRows]
    i++
  }

  console.log('total rows length'.america, rows.length)

  const sheet = new Sheet()
  await sheet.load()

  await sheet.addRows(rows)
  console.log('\n** all done **'.america)
}

run()
