'use strict'

const { gif } = require('./gifMaker')
const animator = require('./animator')

const text2Gif = (options, keyboard, background, text) => {
  const frames = animator.leftToRight(keyboard, background, text)
  gif(options, keyboard, 'myanimated.gif', frames)
}

module.exports = {
  text2Gif
}
