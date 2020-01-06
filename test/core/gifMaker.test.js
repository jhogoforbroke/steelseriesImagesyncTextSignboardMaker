/* global describe it */

'use strict'

const { expect } = require('chai')
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

const proxyquire = require('proxyquire').noCallThru()

const gitMaker = proxyquire('../../core/gifMaker', {
  fs: fsMock,
  gifencoder: gifEncoderMock
})

describe('gifMaker', () => {
  it('should generate a gif frame by frame', () => {
    const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    gitMaker.gif(options, mockKeyboard, FILENAME, frames)

    expect(addFrame.callCount).to.equal(frames.length)
  })
})
