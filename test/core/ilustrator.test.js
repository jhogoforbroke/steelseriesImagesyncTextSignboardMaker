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
})
