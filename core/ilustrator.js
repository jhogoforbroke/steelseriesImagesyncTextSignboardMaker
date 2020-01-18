'use strict'

let canvas
const { createCanvas } = require('canvas')

const createKeyboardSignboard = (keyboard, font) => {
  canvas = createCanvas(keyboard.HEIGHT, keyboard.WIDTH)
  canvas = canvas.getContext('2d')
  canvas.font = font || '30px Arial'
}

const drawBackground = (keyboard, color) => {
  if (!canvas) {
    createKeyboardSignboard(keyboard)
  }
  canvas.fillStyle = color
  canvas.fillRect(0, 0, keyboard.HEIGHT, keyboard.WIDTH)
}

const drawText = (keyboard, text, x, y, font) => {
  if (!canvas) {
    createKeyboardSignboard(keyboard, font)
  }
  canvas.strokeStyle = '#fff'
  canvas.strokeText(text, x, y)
}

const getCanvasCopy = () => {
  return { ...canvas }
}

module.exports = {
  createKeyboardSignboard,
  drawBackground,
  drawText,
  getCanvasCopy
}
