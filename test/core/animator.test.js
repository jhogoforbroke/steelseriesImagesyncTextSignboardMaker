'use strict'

const { expect } = require('chai')
const proxyquire = require('proxyquire').noCallThru()

const {
  mockKeyboard,
  background,
  ilustrator
} = require('../mocks')

const getAnimator = () => proxyquire('../../core/animator', {
  './ilustrator': ilustrator
})

describe('core/animator', () => {
  describe('#leftToRight', () => {
    describe('when animate left to right', () => {
      const animator = getAnimator()
      let frames

      before(() => {
        frames = animator.leftToRight(mockKeyboard, background, 'SOME TEXT')
      })

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

      it('should have send draw specifications by frame', () => {
        expect(ilustrator.setDrawSpecifications.callCount).to.equal(frames.length)
      })

      it('should have send to print frame by frame', () => {
        expect(ilustrator.paint.callCount).to.equal(frames.length)
      })
    })
  })
})
