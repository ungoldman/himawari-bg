var himawari = require('himawari')
var path = require('path')
var wallpaper = require('wallpaper')
var mkdirp = require('mkdirp')
var ProgressBar = require('progress')
var untildify = require('untildify')
var bar = null

module.exports = function (opts) {
  opts = opts || {}
  var outfile = untildify(opts.outfile || `~/Pictures/himawari-images/${Date.now()}.jpg`)

  // create outfile directory just in case
  mkdirp.sync(path.dirname(outfile))

  himawari({
    zoom: opts.zoom || 2,
    outfile: outfile,
    date: opts.date || 'latest',
    infrared: opts.infrared || false,
    parallel: opts.parallel | true,
    chunk: function (info) {
      bar = bar || createProgressBar(info.total)
      bar.tick()
    },
    error: function (err) {
      console.log(err)
      process.exit(1)
    },
    success: function () {
      console.log(`Setting ${outfile} as background...`)
      wallpaper.set(outfile)
      console.log('Complete!')
    }
  })
}

function createProgressBar (total) {
  return new ProgressBar('Downloading satellite images [:bar] :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: total
  })
}
