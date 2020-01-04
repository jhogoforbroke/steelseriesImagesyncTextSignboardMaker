'use strict'

const { createCanvas } = require('canvas')

const canvas

const createKeyboardSignboard = (keyboard, font) => {
  const canvas = createCanvas(keyboard.HEIGHT, keyboard.WIDTH)
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
  canvas.strokeText(text, x, y)
}

module.exports = {
  createKeyboardSignboard,
  drawBackground,
  drawText,
  canvas: { ...canvas }
}
