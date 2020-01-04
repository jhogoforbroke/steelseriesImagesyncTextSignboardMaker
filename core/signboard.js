'use strict'

const { gif } = require('./gifMaker')

const text2Gif = (options, keyboard, background, text) => {
  const frames = animator.leftToRight(options, keyboard, background, text)
  gif('myanimated.gif', frames)
}

module.exports = {
  text2Gif
}
