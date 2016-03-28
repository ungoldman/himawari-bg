# himawari-bg

> Set the latest image from Himawari 8 as your desktop background.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/himawari-bg.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/himawari-bg
[travis-image]: https://img.shields.io/travis/ungoldman/himawari-bg.svg?style=flat-square
[travis-url]: https://travis-ci.org/ungoldman/himawari-bg
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

![](screenshot.jpg)

[Himawari 8](http://himawari8.nict.go.jp/) is a [geostationary](https://en.wikipedia.org/wiki/Geostationary_orbit) weather satellite deployed by the [Japan Meteorological Agency](http://www.jma.go.jp/jma/indexe.html). It takes photographs of Earth every 10 minutes.

`himawari-bg` is a command line program that lets you set the latest image from the Himawari 8 geostationary satellite as your desktop background.

## Install

Warning: requires :zap: **magick** :zap:

* [imagemagick](http://www.imagemagick.org/script/index.php)
* [graphicsmagick](http://www.graphicsmagick.org)
* [node.js](https://nodejs.org/en/download/)

If you have [homebrew](http://brew.sh/) installed, you can use that to quickly install `imagemagick` and `graphicsmagick`. The rest of the program can be easily installed with [`npm`](https://www.npmjs.com/).

```
brew install imagemagick
brew install graphicsmagick
npm install --global himawari-bg
```

Note: This is alpha quality! Tested only on OSX.

## Usage

### Command Line

You can run `himawari-bg` on the command line after it's been installed globally with `npm`.

If you run `himawari-bg` with no arguments, it will download the latest image from Himawari-8 and set it as your desktop background.

:point_right: You have to set the background color of your desktop to black manually if you want it to look as cool as possible.

There are some options available if you'd like to go further:

```
Usage: himawari-bg [options]

    --outfile, -o         Location to save image. (default: `~/Pictures/himawari-images/${Date.now()}.jpg`)
    --zoom, -z            The zoom level of the image. Can be 1-5. (default: 2)
    --date, -d            Time of the picture desired. Can also be "latest". (default: "latest")
    --infrared, -i        Capture picture on the infrared spectrum. (default: false)
    --parallel, -p        Parallelize downloads for increased speeds (can be CPU intensive). (default: true)
    --version, -v         Show version information.
    --help, -h            Show help.
```

### Node.js

`himawari-bg` can also be used as a node module by installing it normally:

```
npm install himawari-bg
```

Here is an example of how it works in node:

```js
var bg = require('himawari-bg')

bg({
  /**
   * The location to save the resulting image.
   * Default: `~/Pictures/himawari-images/${Date.now()}.jpg`
   * @type {String}
   */
  outfile: '/path/to/output/earth.jpg',

  /**
   * The time of the picture desired. If you want to get the latest image, use 'latest'.
   * Default: 'latest'
   * @type {String|Date}
   */
  date: 'latest', // Or new Date() or a date string

  /**
   * The zoom level of the image. Can be 1-5 (default: 2)
   * Each zoom level requires more images to be downloaded and therefore stitched
   * together. Higher zoom yields a higher resolution image.
   * Default: 2
   * @type {Number}
   */
  zoom: 2,

  /**
   * If set to true, an image on the infrared light spectrum will be generated
   * Default: false
   * @type {Boolean}
   */
  infrared: false
})
```

## Acknowledgements

Thanks to [celoyd](https://github.com/celoyd) for the inspiring [`glittering.blue`](https://glittering.blue/) and [jakiestfu](https://github.com/jakiestfu) for creating [`himawari.js`](https://github.com/jakiestfu/himawari.js).

## Addendum

It turns out `himawari.js` was inspired by [this gist](https://gist.github.com/MichaelPote/92fa6e65eacf26219022) by [MichaelPote](https://github.com/MichaelPote) which basically does the exact same thing as `himawari-bg` except in a Windows Powershell environment. So I unwittingly made something inspired by something that was inspired by something that does what I did. Internet! `¯\_(ツ)_/¯`

## Additional Resources

Here are some useful links if you're interested in learning more about the Himawari 8 satellite.

### Official

- [Himawari 8 Real-time Web](http://himawari8.nict.go.jp)
- [Himawari Data Guide](http://www.eorc.jaxa.jp/ptree/userguide.html)
- [Himawari 8/9 Standard Data User's Guide](http://www.data.jma.go.jp/mscweb/en/himawari89/space_segment/hsd_sample/HS_D_users_guide_en_v12.pdf)
- [JAXA account registration (for access to more data)](http://www.eorc.jaxa.jp/ptree/registration_top.html)

### Related Projects

- by @[celoyd](https://github.com/celoyd):
  - [Glittering Blue](http://glittering.blue)
  - [Himawari 8 animation tutorial](https://gist.github.com/celoyd/b92d0de6fae1f18791ef)
  - [deband python script](https://gist.github.com/celoyd/a4dd9202fe5c7978b114)
  - [makeaday bash script](https://gist.github.com/celoyd/c2293929ab3fe97ea597)
- [himawari.js](https://github.com/jakiestfu/himawari.js) by @[jakiestfu](https://github.com/jakiestfu)
- [himawari-urls](https://github.com/ungoldman/himawari-urls) by @[ungoldman](https://github.com/ungoldman)

## Contributing

Contributions welcome! Please read the [contributing guidelines](contributing.md) before getting started.

## License

[ISC](LICENSE.md)
