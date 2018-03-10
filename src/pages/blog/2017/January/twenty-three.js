import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./twentythree.md'), {encoding: 'utf-8'});
`
//cachebuster commen

const TwentyThree = () => <Post source={md} />
export default TwentyThree
