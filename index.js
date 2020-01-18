'use strict'

const { text2Gif } = require('./core/signboard')
const { RGB84Key } = require('./config/keyboard')

const REPEAT = 0
const DELAY = 500
const QUALITY = 10

const options = {
  REPEAT,
  DELAY,
  QUALITY
}

const background = {
  color: '#ff0000'
}

text2Gif(options, RGB84Key, background, 'SOME AWSOME TEXT!')
