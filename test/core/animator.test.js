/* global describe it */

'use strict'

const { expect } = require('chai')
const sinon = require('sinon')

const proxyquire = require('proxyquire').noCallThru()

const ilustrator = {
  drawBackground: sinon.spy(),
  drawText: sinon.spy(),
  getCanvasCopy: sinon.stub().returns(() => ({}))
}

const background = {
  color: '#SOMECOLOR'
}

const mockKeyboard = {
  STEP: 10,
  WIDTH: 500,
  HEIGHT: 100
}

const animator = proxyquire('../../core/animator', {
  './ilustrator': ilustrator
})

describe('animator', () => {
  describe('when animate left to right', () => {
    const frames = animator.leftToRight(mockKeyboard, background, 'SOME TEXT')

    it('should make animates frames to whole keyboard space', () => {
      //   PADLEFT KEYBOARD PADRIGHT
      // |--------|--------|--------|
      // | => SOME PHASE PASSING => |
      // |--------|--------|--------|
      const padLeftWidth = mockKeyboard.WIDTH
      const padRightWidth = mockKeyboard.WIDTH
      const wholeKeyboardExtension = (padLeftWidth + mockKeyboard.WIDTH + padRightWidth)

      expect(frames.length).to.equal(wholeKeyboardExtension / mockKeyboard.STEP)
    })

    it('should call to draw background of even frame', () => {
      expect(ilustrator.drawBackground.callCount).to.equal(frames.length)
    })

    it('should call to draw text of even frame', () => {
      expect(ilustrator.drawText.callCount).to.equal(frames.length)
    })
  })
})
