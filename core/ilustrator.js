'use strict'

const canvasSpec = {}
const { createCanvas } = require('canvas')

const drawBackground = (keyboard, color) => {
  canvasSpec.fillStyle = color
  canvasSpec.fillRect = [0, 0, keyboard.WIDTH, keyboard.HEIGHT]
  canvasSpec.height = keyboard.HEIGHT
  canvasSpec.width = keyboard.WIDTH
}

const drawText = (keyboard, text, x, y, font) => {
  canvasSpec.font = '50px Arial'
  canvasSpec.strokeStyle = '#FFF'
  canvasSpec.strokeText = [text, x, y]
  canvasSpec.height = keyboard.HEIGHT
  canvasSpec.width = keyboard.WIDTH
}

const getCanvasCopy = () => {
  const canvas = createCanvas(canvasSpec.width, canvasSpec.height)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = canvasSpec.fillStyle
  ctx.fillRect(canvasSpec.fillRect[0], canvasSpec.fillRect[1], canvasSpec.fillRect[2], canvasSpec.fillRect[3])
  ctx.font = canvasSpec.font
  ctx.strokeStyle = canvasSpec.strokeStyle
  ctx.strokeText(canvasSpec.strokeText[0], canvasSpec.strokeText[1], canvasSpec.strokeText[2])
  return ctx
}

module.exports = {
  drawBackground,
  drawText,
  getCanvasCopy
}
