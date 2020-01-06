'use strict'

const ilustrator = require('./ilustrator')

let positions

const setPositions = (keyboard) => {
  positions = {
    X: { LEFT: -keyboard.WIDTH, CENTER: (keyboard.WIDTH / 2), RIGHT: (keyboard.WIDTH * 2) },
    Y: { TOP: -keyboard.HEIGHT, CENTER: (keyboard.HEIGHT / 2), BOTTOM: (keyboard.HEIGHT * 2) }
  }
}

const frame = (keyboard, backgroundOptions, textOptions) => {
  ilustrator.drawBackground(keyboard, backgroundOptions.color)
  ilustrator.drawText(textOptions.text, textOptions.x, textOptions.y)
  return ilustrator.getCanvasCopy()
}

const leftToRight = (keyboard, background, text) => {
  if (!positions) {
    setPositions(keyboard)
  }

  const frames = []
  for (let i = positions.X.LEFT, len = positions.X.RIGHT; i < len; i += keyboard.STEP) {
    frames.push(frame(keyboard, background, { text, x: i, y: positions.Y.CENTER }))
  }
  return frames
}

module.exports = {
  leftToRight
}
