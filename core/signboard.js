'use strict'

const { gif } = require('./gifMaker')
const animator = require('./animator')

const text2Gif = (options, keyboard, background, text, gifName) => {
  const frames = animator.leftToRight(keyboard, background, text)
  gif(options, keyboard, frames, gifName)
}

module.exports = {
  text2Gif
}
