import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./01-15-17-AI.md'), {encoding: 'utf-8'});
`
//cachebuster comment

const Ai = () => <Post source={md} />
export default Ai
