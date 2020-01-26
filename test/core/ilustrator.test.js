// 'use strict'
//
// const { expect } = require('chai')
// const sinon = require('sinon')
//
// const proxyquire = require('proxyquire').noCallThru()
//
// const {
//   POSX,
//   POSY,
//   text,
//   color,
//   canvas,
//   mockKeyboard,
//   keyboard,
//   background
// } = require('../mocks')
//
// const getIlustrator = () => proxyquire('../../core/ilustrator', {
//   canvas
// })
//
// describe('ilustrator', () => {
//   describe('#setDrawSpecifications', () => {
//     const ilustrator = getIlustrator()
//
//     before(() => {
//       ilustrator.setDrawSpecifications(keyboard, background, text)
//       frame = ilustrator.paint()
//     })
//
//     it('should have to set keyboard as canvas', () => {
//       expect(frame.height).to.equal(keyboard.height)
//     })
//   })
// })
