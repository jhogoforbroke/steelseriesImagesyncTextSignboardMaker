/* global describe it before beforeEach */

'use strict'

const { expect } = require('chai')
const sinon = require('sinon')

const proxyquire = require('proxyquire').noCallThru()

const POSX = 10
const POSY = 11

const mockKeyboard = {
  STEP: 10,
  WIDTH: 500,
  HEIGHT: 100
}

const text = 'SOME TEXT'
const color = '#000'

const canvas = {
  fillRect: sinon.spy(),
  strokeText: sinon.spy()
}
canvas.getContext = sinon.stub().returns(canvas)

const canvasMock = {
  createCanvas: sinon.stub().returns(canvas)
}

const ilustrator = proxyquire('../../core/ilustrator', {
  canvas: canvasMock
})

describe('ilustrator', () => {
  describe('when draw the background', () => {
    describe('and not have a canvas ', () => {
      before(() => {
        ilustrator.createKeyboardSignboard = sinon.spy()
      })

      it('should create a canvas', () => {
        ilustrator.drawBackground(mockKeyboard, color)
        sinon.assert.calledOnce(canvasMock.createCanvas)
      })
    })

    beforeEach(() => {
      ilustrator.drawBackground(mockKeyboard, color)
    })

    it('should fill with the specified color', () => {
      expect(canvas.fillStyle).to.equal(color)
    })

    it('should make a rectangle with keyboard size', () => {
      sinon.assert.calledWith(canvas.fillRect, 0, 0, mockKeyboard.HEIGHT, mockKeyboard.WIDTH)
    })
  })

  describe('when draw the text', () => {
    describe('and not have a canvas', () => {
      before(() => {
        ilustrator.createKeyboardSignboard = sinon.spy()
      })

      it('should create a canvas', () => {
        ilustrator.drawText(mockKeyboard, text, 0, 0)
        sinon.assert.calledOnce(canvasMock.createCanvas)
      })
    })

    beforeEach(() => {
      ilustrator.drawText(mockKeyboard, text, POSX, POSY)
    })

    it('write text in specified position', () => {
      sinon.assert.calledWith(canvas.strokeText, text, POSX, POSY)
    })
  })

  it('should get a copy of canvas', () => {
    ilustrator.drawBackground(mockKeyboard, color)
    ilustrator.drawText(mockKeyboard, text, POSX, POSY)

    const canvasCopy = ilustrator.getCanvasCopy()

    expect(canvas).to.deep.equal(canvasCopy)
  })
})
