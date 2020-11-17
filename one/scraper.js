const puppeteer = require('puppeteer')

async function scrapeApp(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const [el] = await page.$x('//*[@id="imgBlkFront"]')
  const src = await el.getProperty('src')
  const srcText = await src.jsonValue()

  const [el2] = await page.$x('//*[@id="productTitle"]/text()')
  const title = await el2.getProperty('textContent')
  const titleText = await title.jsonValue()

  const [el3] = await page.$x('//*[@id="bylineInfo"]/span/span[1]/a[1]')
  const author = await el3.getProperty('textContent')
  const authorText = await author.jsonValue()

  console.log({ srcText, titleText, authorText })

  browser.close()
}
const url =
  'https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=sr_1_1?crid=9NO3GNBLAIYT&dchild=1&keywords=black+swan+book&qid=1605631684&sprefix=black+swan%2Caps%2C241&sr=8-1'
scrapeApp(url)
