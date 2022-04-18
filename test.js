const fs = require('fs')
const path = require('path')
const test = require('tape')
const bg = require('./')
const wallpaper = require('wallpaper')

let originalImagePath

test('main', async t => {
  originalImagePath = await wallpaper.get()

  await bg({ outfile: './test.jpg' })

  await sleep(250) // let system catch up
  const newPape = await wallpaper.get()
  const testJpg = path.resolve('./test.jpg')
  t.equal(newPape, testJpg)
})

test.onFinish(async () => {
  await sleep(250)
  await wallpaper.set(originalImagePath)
  fs.unlinkSync('./test.jpg')
})

// shh
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
