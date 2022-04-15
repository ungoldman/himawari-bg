#!/usr/bin/env node

const bg = require('./')
const cliclopts = require('cliclopts')
const minimist = require('minimist')
const pkg = require('./package.json')

const allowedOptions = [
  {
    name: 'outfile',
    abbr: 'o',
    help: 'Location to save image. (default: ~/Pictures/himawari-images/$TIMESTAMP.jpg)'
  },
  {
    name: 'zoom',
    abbr: 'z',
    help: 'The zoom level of the image. Can be 1-5.',
    default: 2
  },
  {
    name: 'date',
    abbr: 'd',
    help: 'Time of the picture desired. Can also be "latest".',
    default: 'latest'
  },
  {
    name: 'infrared',
    abbr: 'i',
    help: 'Capture picture on the infrared spectrum.',
    boolean: true,
    default: false
  },
  {
    name: 'parallel',
    abbr: 'p',
    help: 'Parallelize downloads for increased speeds (can be CPU intensive).',
    boolean: true,
    default: true
  },
  {
    name: 'version',
    abbr: 'v',
    help: 'Show version information.',
    boolean: true
  },
  {
    name: 'help',
    abbr: 'h',
    help: 'Show help.',
    boolean: true
  }
]

const opts = cliclopts(allowedOptions)
const argv = minimist(process.argv.slice(2), opts.options())

if (argv.version) {
  console.log(pkg.version)
  process.exit()
}

if (argv.help) {
  console.log()
  console.log('Usage: himawari-bg [options]')
  console.log()
  opts.print()
  console.log()
  console.log('report an issue: ' + pkg.bugs.url)
  console.log()
  console.log('himawari-bg@%s %s', pkg.version, __dirname)
  process.exit()
}

bg(argv)
