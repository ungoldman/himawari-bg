const bg = require('./')

bg({
  /**
   * The location to save the resulting image.
   * Default: `~/Pictures/himawari-images/${Date.now()}.jpg`
   * @type {String}
   */
  outfile: './example.jpg',

  /**
   * The time of the picture desired. If you want to get the latest image, use 'latest'.
   * Default: 'latest'
   * @type {String|Date}
   */
  date: new Date(2016, 1, 1), // Or new Date() or a date string

  /**
   * The zoom level of the image. Can be 1-5 (default: 2)
   * Each zoom level requires more images to be downloaded and therefore stitched
   * together. Higher zoom yields a higher resolution image.
   * Default: 2
   * @type {Number}
   */
  zoom: 1,

  /**
   * If set to true, an image on the infrared light spectrum will be generated
   * Default: false
   * @type {Boolean}
   */
  infrared: true
})
