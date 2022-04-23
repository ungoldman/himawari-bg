const himawari = require('@ungoldman/himawari')
const path = require('path')
const wallpaper = require('wallpaper')
const mkdirp = require('mkdirp')
const ProgressBar = require('progress')
const untildify = require('untildify')
let bar = null

async function himawariBG (opts) {
  opts = opts || {}
  const outfile = untildify(opts.outfile || `~/Pictures/himawari-images/${Date.now()}.jpg`)

  // create outfile directory just in case
  mkdirp.sync(path.dirname(outfile))

  return new Promise((resolve, reject) => {
    himawari({
      zoom: opts.zoom || 2,
      outfile,
      date: opts.date || 'latest',
      infrared: opts.infrared || false,
      parallel: opts.parallel | true,
      chunk: function (info) {
        bar = bar || createProgressBar(info.total)
        bar.tick()
      },
      error: function (err) {
        console.log(err)
        reject(err)
      },
      success: async function () {
        await sleep(250) // add delay to avoid flash of system bg
        wallpaper.set(outfile, { screen: opts.screen || 'main', scale: opts.scale || 'fit' })
        console.log('Complete!')
        resolve()
      }
    })
  })
}

function createProgressBar (total) {
  return new ProgressBar('Downloading satellite images [:bar] :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total
  })
}

// shh
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = himawariBG
