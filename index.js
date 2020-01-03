'use strict'

const fs = require('fs')
const { createCanvas } = require('canvas')
const GIFEncoder = require('gifencoder')

const REPEAT = 0
const DELAY = 500
const QUALITY = 10

const STEP = 20
const WIDTH = 200
const HEIGHT = 100

const POSITION = {
  X: { LEFT: -WIDTH, CENTER: (WIDTH / 2), RIGHT: (WIDTH * 2) },
  Y: { TOP: -HEIGHT, CENTER: (HEIGHT / 2), BOTTOM: (HEIGHT * 2) }
}

const textfont = '30px Arial'
const bgcolor = '#ff0000'
const phrase = 'SOME AWSOME PHRASE!'

const encoder = new GIFEncoder(HEIGHT, WIDTH)
encoder.createReadStream().pipe(fs.createWriteStream('myanimated.gif'))

encoder.start()
encoder.setRepeat(REPEAT)
encoder.setDelay(DELAY)
encoder.setQuality(QUALITY)

// use node-canvas
const canvas = createCanvas(HEIGHT, WIDTH)
const ctx = canvas.getContext('2d')

for (let i = POSITION.X.LEFT, len = POSITION.X.RIGHT; i < len; i += STEP) {
  ctx.fillStyle = bgcolor
  ctx.fillRect(0, 0, HEIGHT, WIDTH)
  ctx.font = textfont
  ctx.strokeText(phrase, i, POSITION.Y.CENTER)
  encoder.addFrame(ctx)
}

encoder.finish()
