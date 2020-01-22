'use strict'

const ilustrator = require('./ilustrator')

const frame = (keyboard, backgroundOptions, textOptions) => {
  ilustrator.drawBackground(keyboard, backgroundOptions.color)
  ilustrator.drawText(keyboard, textOptions.text, textOptions.x, textOptions.y)
  return ilustrator.getCanvasCopy()
}

const leftToRight = (keyboard, background, text) => {
  const positions = {
    X: { LEFT: -(keyboard.WIDTH * 2), CENTER: (keyboard.WIDTH / 2), RIGHT: keyboard.WIDTH },
    Y: { TOP: -(keyboard.HEIGHT * 2), CENTER: (keyboard.HEIGHT / 2), BOTTOM: keyboard.HEIGHT }
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
