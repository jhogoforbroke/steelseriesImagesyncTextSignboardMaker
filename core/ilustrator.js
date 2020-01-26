'use strict'

const { createCanvas } = require('canvas')

const DEFAULT = {
  background: {
    color: '#000',
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  text: {
    color: '#FFF',
    font: '50px Arial'
  },
  height: 0,
  width: 0
}

const canvasSpec = DEFAULT

const setKeyboardCanvas = (keyboard) => {
  canvasSpec.height = keyboard.HEIGHT
  canvasSpec.width = keyboard.WIDTH
}

const setBackgroundSpec = ({ color = DEFAULT.background.color }) => {
  canvasSpec.background.color = color
  canvasSpec.background.width = canvasSpec.width
  canvasSpec.background.height = canvasSpec.height
}

const setTextSpec = ({ text, x, y, font = DEFAULT.text.font, color = DEFAULT.text.color }) => {
  canvasSpec.text.font = font
  canvasSpec.text.color = color
  canvasSpec.text.text = text
  canvasSpec.text.x = x
  canvasSpec.text.y = y
  canvasSpec.strokeText = { text, x, y }
}

const setDrawSpecifications = (keyboard, background, text) => {
  setKeyboardCanvas(keyboard)
  setBackgroundSpec(background)
  setTextSpec(text)
}

const paintBackgrount = (ctx) => {
  ctx.fillStyle = canvasSpec.background.color
  ctx.fillRect(
    canvasSpec.background.x,
    canvasSpec.background.y,
    canvasSpec.background.width,
    canvasSpec.background.height
  )
}

const paintText = (ctx) => {
  ctx.font = canvasSpec.text.font
  ctx.strokeStyle = canvasSpec.text.color
  ctx.strokeText(
    canvasSpec.text.text,
    canvasSpec.text.x,
    canvasSpec.text.y
  )
}

const paint = () => {
  const canvas = createCanvas(canvasSpec.width, canvasSpec.height)
  const ctx = canvas.getContext('2d')

  paintBackgrount(ctx)
  paintText(ctx)

  return ctx
}

module.exports = {
  setDrawSpecifications,
  paint
}
