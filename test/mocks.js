'use strict'

const sinon = require('sinon')

const ilustrator = require('../core/ilustrator')
sinon.stub(ilustrator, 'setDrawSpecifications').callThrough()
sinon.stub(ilustrator, 'paint')

const REPEAT = 0
const DELAY = 500
const QUALITY = 10

const options = {
  REPEAT,
  DELAY,
  QUALITY
}

const mockKeyboard = {
  STEP: 10,
  WIDTH: 500,
  HEIGHT: 100
}

const background = {
  color: '#SOMECOLOR'
}

const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const animator = {
  leftToRight: sinon.stub().returns(frames)
}

const gifMaker = {
  gif: sinon.spy()
}

const ctx = {
  fillRect: sinon.spy(),
  strokeText: sinon.spy()
}
ctx.getContext = sinon.stub().returns(ctx)

const canvas = {
  createCanvas: sinon.stub().returns(ctx)
}

const POSX = 10
const POSY = 11

const text = 'SOME TEXT'
const color = '#000'

const FILENAME = 'SOMEFILENAME.gif'

const fs = {
  createWriteStream: sinon.spy()
}

const addFrame = sinon.spy()

function gifEncoder () {
  this.createReadStream = () => ({ pipe: sinon.spy() })
  this.start = sinon.spy()
  this.setRepeat = sinon.spy()
  this.setDelay = sinon.spy()
  this.setQuality = sinon.spy()
  this.addFrame = addFrame
  this.finish = sinon.spy()
}

module.exports = {
  options,
  mockKeyboard,
  background,
  frames,
  animator,
  gifMaker,
  ilustrator,
  canvas,
  ctx,
  POSX,
  POSY,
  text,
  color,
  FILENAME,
  fs,
  gifEncoder,
  addFrame
}
