const e = require('express')
const puppeteer = require('puppeteer')

const scrapeChannel = async (url) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const [el] = await page.$x('//*[@id="subscriber-count"]')
  const text = await el.getProperty('textContent')
  const name = await text.jsonValue()

  const [el2] = await page.$x('//*[@id="img"]')
  const src = await el2.getProperty('src')
  const avatarUrl = await src.jsonValue()

  browser.close()
  // console.log({ name, avatarUrl })

  return { name, avatarUrl }
}

module.exports = {
  scrapeChannel,
}
