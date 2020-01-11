/* global describe it before */

'use strict'

const sinon = require('sinon')

const proxyquire = require('proxyquire').noCallThru()

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

const signboard = proxyquire('../../core/signboard', {
  './animator': animator,
  './gifMaker': gifMaker
})

describe('signboard', () => {
  describe('when creates a gif', () => {
    before(() => {
      signboard.text2Gif(options, mockKeyboard, background, 'SOME TEXT TO GIF-UP!')
    })

    it('should call to generate a gif with frames', () => {
      sinon.assert.calledWith(gifMaker.gif, sinon.match.any, sinon.match.any, frames, sinon.match.any)
    })
  })
})
