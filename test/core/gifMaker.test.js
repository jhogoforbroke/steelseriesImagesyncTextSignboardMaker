/* global describe it */

'use strict'

const { expect } = require('chai')
const sinon = require('sinon')

const {
  options,
  mockKeyboard,
  frames,
  FILENAME,
  fsMock,
  gifEncoderMock,
  addFrame
} = require('../mocks')

const proxyquire = require('proxyquire').noCallThru()

const gitMaker = proxyquire('../../core/gifMaker', {
  fs: fsMock,
  gifencoder: gifEncoderMock
})

describe('gifMaker', () => {
  it('should generate a gif frame by frame', () => {
    gitMaker.gif(options, mockKeyboard, frames, FILENAME)
    expect(addFrame.callCount).to.equal(frames.length)
  })

  describe('when it\'s no gifName', () => {
    it('should create a random gif name', () => {
      gitMaker.gif(options, mockKeyboard, frames)
      sinon.assert.calledWith(fsMock.createWriteStream, sinon.match.string)
    })
  })
})
