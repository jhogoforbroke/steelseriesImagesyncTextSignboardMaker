'use strict'

const fs = require('fs')
const GIFEncoder = require('gifencoder')

const gif = (options, keyboard, name, frames) => {
  const encoder = new GIFEncoder(keyboard.HEIGHT, keyboard.WIDTH)
  encoder.createReadStream().pipe(fs.createWriteStream(name))

  encoder.start()
  encoder.setRepeat(options.REPEAT)
  encoder.setDelay(options.DELAY)
  encoder.setQuality(options.QUALITY)

  frames.forEach(frame => encoder.addFrame(frame))

  encoder.finish()
}

module.exports = {
  gif
}
