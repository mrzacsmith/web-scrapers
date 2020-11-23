const { GoogleSpreadsheet } = require('google-spreadsheet')

module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet(
      '10Ac-zSkC-6mBylvX5JzN0KMCNKDN3S-9i7-INq5s-Q4'
    )
  }

  async load() {
    await this.doc.useServiceAccountAuth(require('./creds.json'))
    await this.doc.loadInfo()
  }

  async addRows(rows) {
    const sheet = this.doc.sheetsByIndex[0]

    await sheet.addRows(rows)
  }
}
