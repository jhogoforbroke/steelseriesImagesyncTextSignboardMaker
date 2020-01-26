'use strict'

const ilustrator = require('./ilustrator')

const getPositions = (keyboard) => ({
  X: { LEFT: -(keyboard.WIDTH * 2), CENTER: (keyboard.WIDTH / 2), RIGHT: keyboard.WIDTH },
  Y: { TOP: -(keyboard.HEIGHT * 2), CENTER: (keyboard.HEIGHT / 2), BOTTOM: keyboard.HEIGHT }
})

const frame = (keyboard, background, text) => {
  ilustrator.setDrawSpecifications(keyboard, background, text)
  return ilustrator.paint()
}

const leftToRight = (keyboard, background, text) => {
  const positions = getPositions(keyboard)

  const frames = []
  for (let i = positions.X.LEFT, len = positions.X.RIGHT; i < len; i += keyboard.STEP) {
    frames.push(frame(keyboard, background, { x: i, y: positions.Y.CENTER, ...text }))
  }
  return frames
}

module.exports = {
  leftToRight
}
