const { GoogleSpreadsheet } = require('google-spreadsheet')

module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet(
      '16dEtmJEce2iIyVYjws1hoFhLNvHPqUCAqREpbc3lIEw'
    )
  }

  async load() {
    await this.doc.useServiceAccountAuth(require('./creds.json'))
    await this.doc.loadInfo()
  }

  async getRows(rows) {
    const sheet = this.doc.sheetsByIndex[0]

    return await sheet.getRows()
  }
}
