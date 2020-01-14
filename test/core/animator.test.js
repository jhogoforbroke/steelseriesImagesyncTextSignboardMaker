'use strict'

const { expect } = require('chai')
const proxyquire = require('proxyquire').noCallThru()

const {
  mockKeyboard,
  background,
  ilustrator
} = require('../mocks')

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
