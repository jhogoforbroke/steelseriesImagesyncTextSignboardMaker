'use strict'

const fs = require('fs')
const GIFEncoder = require('gifencoder')

const randomGifName = () => {
  return `stlsImageSync_${Math.random().toString(36).substring(3)}.gif`
}

const gif = (options, keyboard, frames, name = randomGifName()) => {
  const encoder = new GIFEncoder(keyboard.WIDTH, keyboard.HEIGHT)
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
