#!/usr/bin/env node

'use strict'

const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const inquirer = require('inquirer')
const { Spinner } = require('clui')

const { text2Gif } = require('../core/signboard')
const keyboard = require('../config/keyboard')

const options = {
  REPEAT: 1,
  DELAY: 100,
  QUALITY: 10
}

const background = {
  color: '#000'
}

clear()

console.log(
  chalk.green(
    figlet.textSync('Steelseries Imagesync', { horizontalLayout: 'default', verticalLayout: 'default' })
  )
)

console.log(chalk.blue('.: Text Signboard Maker :.'))

const execute = async () => {
  const { keyboardType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'keyboardType',
      message: 'chouse your keyboard type',
      choices: Object.keys(keyboard)
    }
  ])

  const { text } = await inquirer.prompt([
    {
      type: 'string',
      name: 'text',
      message: 'type your text to gif up!'
    }
  ])

  console.log(chalk.blue('Making you gif now!'))

  const spinner = new Spinner()
  spinner.start()
  text2Gif(options, keyboard[keyboardType], background, text)
  spinner.stop()

  console.log(chalk.blue('COMPLETE! Press any key to exit'))

  process.stdin.setRawMode(true)
  process.stdin.resume()
  process.stdin.on('data', process.exit.bind(process, 0))
}

execute()
