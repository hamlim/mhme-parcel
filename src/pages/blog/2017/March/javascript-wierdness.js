import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./Javascriptwierdness.md'), {encoding: 'utf-8'});
`
//cachebuster commen

const WackyJavascript = () => <Post source={md} />
export default WackyJavascript
