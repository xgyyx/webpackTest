#! /usr/bin/env node

const { program } = require('commander')
const getWebpackConfig = require('../webpack.config')
const pkg = require('../package.json')
const { webpack } = require('webpack')

program
  .version(pkg.version)
  .command('buildDir <dirName>')
  .description('build a spercific directory')
  .action(dirName => {
    if (!dirName) return
    const webpackConfig = getWebpackConfig(dirName)
    console.log(dirName, 'webpack config:', webpackConfig)
    webpack(webpackConfig)
      .run((err, stats) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(
          stats.toString({ chunks: false, colors: true })
        )
      })
  })

program.parse()