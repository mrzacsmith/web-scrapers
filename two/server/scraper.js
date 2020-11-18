const e = require('express')
const puppeteer = require('puppeteer')

const scrapeChannel = async (url) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const [el] = await page.$x('//*[@id="text"]')
  const text = await el.getProperty('textContent')
  const name = await text.jsonValue()

  const [el2] = await page.$x('//*[@id="img"]')
  const src = await el2.getProperty('src')
  const avatarUrl = await src.jsonValue()

  browser.close()
  console.log({ name, avatarUrl })

  return { name, avatarUrl }
}

scrapeChannel('https://www.youtube.com/channel/UCRLEADhMcb8WUdnQ5_Alk7g')
