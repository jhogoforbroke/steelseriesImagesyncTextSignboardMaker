'use strict'

const { expect } = require('chai')
const sinon = require('sinon')

const proxyquire = require('proxyquire').noCallThru()

const {
  POSX,
  POSY,
  text,
  color,
  canvas,
  mockKeyboard,
  canvasMock
} = require('../mocks')

const getIlustrator = () => proxyquire('../../core/ilustrator', {
  canvas: canvasMock
})

describe('ilustrator', () => {
  describe('when draw the background', () => {
    describe('and not have a canvas ', () => {
      const ilustratorWithoutCanvas = getIlustrator()

      before(() => {
        ilustratorWithoutCanvas.createKeyboardSignboard = sinon.spy()
      })

      it('should create a canvas', () => {
        ilustratorWithoutCanvas.drawBackground(mockKeyboard, color)
        sinon.assert.calledOnce(canvasMock.createCanvas)
      })
    })

    const ilustrator = getIlustrator()

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
      const ilustratorWithoutCanvas = getIlustrator()

      before(() => {
        ilustratorWithoutCanvas.createKeyboardSignboard = sinon.spy()
      })

      it('should create a canvas', () => {
        ilustratorWithoutCanvas.drawText(mockKeyboard, text, 0, 0)
        sinon.assert.calledOnce(canvasMock.createCanvas)
      })
    })

    const ilustrator = getIlustrator()

    beforeEach(() => {
      ilustrator.drawText(mockKeyboard, text, POSX, POSY)
    })

    it('write text in specified position', () => {
      sinon.assert.calledWith(canvas.strokeText, text, POSX, POSY)
    })
  })

  describe('when get Canvas Copy', () => {
    const ilustrator = getIlustrator()

    it('should get a copy of canvas', () => {
      ilustrator.drawBackground(mockKeyboard, color)
      ilustrator.drawText(mockKeyboard, text, POSX, POSY)

      const canvasCopy = ilustrator.getCanvasCopy()

      expect(canvas).to.deep.equal(canvasCopy)
    })
  })

  afterEach(() => {
    canvasMock.createCanvas.resetHistory()
  })
})
