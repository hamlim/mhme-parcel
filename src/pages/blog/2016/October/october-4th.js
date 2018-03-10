import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./october4th.md'), {encoding: 'utf-8'});
`
//cachebuster comment

const October4th = () => <Post source={md} />
export default October4th
