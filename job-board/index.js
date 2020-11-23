const { GoogleSpreadsheet } = require('google-spreadsheet')

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(
  '10Ac-zSkC-6mBylvX5JzN0KMCNKDN3S-9i7-INq5s-Q4'
)

const run = async () => {
  // OR load directly from json file if not in secure environment
  await doc.useServiceAccountAuth(require('./creds.json'))

  await doc.loadInfo() // loads document properties and worksheets
  console.log(doc.title)
  await doc.updateProperties({ title: 'renamed doc' })
}

run()
// const sheet = doc.sheetsByIndex[0] // or use doc.sheetsById[id]
// console.log(sheet.title)
// console.log(sheet.rowCount)

// // adding / removing sheets
// const newSheet = await doc.addSheet({ title: 'hot new sheet!' })
// await newSheet.delete()
