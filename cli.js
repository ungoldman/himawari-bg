#!/usr/bin/env node

var bg = require('./')
var cliclopts = require('cliclopts')
var minimist = require('minimist')

var allowedOptions = [
  {
    name: 'outfile',
    abbr: 'o',
    help: 'Location to save image. (default: `~/Pictures/himawari-images/${Date.now()}.jpg`)'
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
    name: 'help',
    abbr: 'h',
    help: 'Show help.',
    boolean: true
  }
]

var opts = cliclopts(allowedOptions)
var argv = minimist(process.argv.slice(2), opts.options())

if (argv.help) {
  console.log('Usage: himawari-bg [options]')
  opts.print()
  process.exit()
}

bg(argv)
