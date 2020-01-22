'use strict'

const sinon = require('sinon')

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

const ilustrator = {
  drawBackground: sinon.spy(),
  drawText: sinon.spy(),
  getCanvasCopy: sinon.stub().returns({})
}

const canvas = {
  fillRect: sinon.spy(),
  strokeText: sinon.spy()
}
canvas.getContext = sinon.stub().returns(canvas)

const canvasMock = {
  createCanvas: sinon.stub().returns(canvas)
}

const POSX = 10
const POSY = 11

const text = 'SOME TEXT'
const color = '#000'

const FILENAME = 'SOMEFILENAME.gif'

const fsMock = {
  createWriteStream: sinon.spy()
}

const addFrame = sinon.spy()

function gifEncoderMock () {
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
  canvasMock,
  POSX,
  POSY,
  text,
  color,
  FILENAME,
  fsMock,
  gifEncoderMock,
  addFrame
}
