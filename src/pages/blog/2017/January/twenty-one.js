import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./twentyone.md'), {encoding: 'utf-8'});
`
//cachebuster commen

const TwentyOne = () => <Post source={md} />
export default TwentyOne
