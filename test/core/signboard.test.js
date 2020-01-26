'use strict'

const sinon = require('sinon')
const proxyquire = require('proxyquire').noCallThru()

const {
  options,
  mockKeyboard,
  background,
  frames,
  animator,
  gifMaker
} = require('../mocks')

const signboard = proxyquire('../../core/signboard', {
  './animator': animator,
  './gifMaker': gifMaker
})

describe('signboard', () => {
  describe('#createSign', () => {
    describe('when creates a gif', () => {
      before(() => {
        signboard.createSign(options, mockKeyboard, background, 'SOME TEXT TO GIF-UP!')
      })

      it('should call to generate a gif with frames', () => {
        sinon.assert.calledWith(gifMaker.gif, sinon.match.any, sinon.match.any, frames, sinon.match.any)
      })
    })
  })
})
