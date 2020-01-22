'use strict'

const GIFEncoder = require('gifencoder')
const { createCanvas } = require('canvas')
const fs = require('fs')

const encoder = new GIFEncoder(200, 100)

// stream the results as they are available into myanimated.gif
encoder.createReadStream().pipe(fs.createWriteStream('myanimated.gif'))

encoder.start()
encoder.setRepeat(0) // 0 for repeat, -1 for no-repeat
encoder.setDelay(500) // frame delay in ms
encoder.setQuality(10) // image quality. 10 is default.

// use node-canvas
let canvas = createCanvas(200, 100)
let ctx = canvas.getContext('2d')
ctx.fillStyle = '#ff0000'
ctx.fillRect(0, 0, 200, 100)
ctx.font = '50px Arial'
ctx.strokeStyle = '#FFF'
ctx.strokeText('AAAAAAAAAA', 20, 50)
encoder.addFrame(ctx)

canvas = createCanvas(200, 100)
ctx = canvas.getContext('2d')
ctx.fillStyle = '#ff0000'
ctx.fillRect(0, 0, 200, 100)
ctx.font = '50px Arial'
ctx.strokeStyle = '#FFF'
ctx.strokeText('AAAAAAAAAA', 40, 50)
encoder.addFrame(ctx)

canvas = createCanvas(200, 100)
ctx = canvas.getContext('2d')
ctx.fillStyle = '#ff0000'
ctx.fillRect(0, 0, 200, 100)
ctx.font = '50px Arial'
ctx.strokeStyle = '#FFF'
ctx.strokeText('AAAAAAAAAA', 60, 50)
encoder.addFrame(ctx)

canvas = createCanvas(200, 100)
ctx = canvas.getContext('2d')
ctx.fillStyle = '#ff0000'
ctx.fillRect(0, 0, 200, 100)
ctx.font = '50px Arial'
ctx.strokeStyle = '#FFF'
ctx.strokeText('AAAAAAAAAA', 80, 50)
encoder.addFrame(ctx)

canvas = createCanvas(200, 100)
ctx = canvas.getContext('2d')
ctx.fillStyle = '#ff0000'
ctx.fillRect(0, 0, 200, 100)
ctx.font = '50px Arial'
ctx.strokeStyle = '#FFF'
ctx.strokeText('AAAAAAAAAA', 100, 50)
encoder.addFrame(ctx)

canvas = createCanvas(200, 100)
ctx = canvas.getContext('2d')
ctx.fillStyle = '#ff0000'
ctx.fillRect(0, 0, 200, 100)
ctx.font = '50px Arial'
ctx.strokeStyle = '#FFF'
ctx.strokeText('AAAAAAAAAA', 120, 50)
encoder.addFrame(ctx)

canvas = createCanvas(200, 100)
ctx = canvas.getContext('2d')
ctx.fillStyle = '#ff0000'
ctx.fillRect(0, 0, 200, 100)
ctx.font = '50px Arial'
ctx.strokeStyle = '#FFF'
ctx.strokeText('AAAAAAAAAA', 140, 50)
encoder.addFrame(ctx)

canvas = createCanvas(200, 100)
ctx = canvas.getContext('2d')
ctx.fillStyle = '#ff0000'
ctx.fillRect(0, 0, 200, 100)
ctx.font = '50px Arial'
ctx.strokeStyle = '#FFF'
ctx.strokeText('AAAAAAAAAA', 160, 50)
encoder.addFrame(ctx)

canvas = createCanvas(200, 100)
ctx = canvas.getContext('2d')
ctx.fillStyle = '#ff0000'
ctx.fillRect(0, 0, 200, 100)
ctx.font = '50px Arial'
ctx.strokeStyle = '#FFF'
ctx.strokeText('AAAAAAAAAA', 180, 50)
encoder.addFrame(ctx)

encoder.finish()
