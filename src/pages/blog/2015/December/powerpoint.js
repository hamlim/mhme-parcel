import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./Powerpoint.md'), {encoding: 'utf-8'});
`

// fsdjkfn

const Powerpoint = () => <Post source={md} />
export default Powerpoint
