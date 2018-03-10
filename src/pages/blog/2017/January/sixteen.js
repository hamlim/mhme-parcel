import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./sixteen.md'), {encoding: 'utf-8'});
`
//cachebuster commen

const Sixteen = () => <Post source={md} />
export default Sixteen
