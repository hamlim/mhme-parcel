import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./wr6.md'), {encoding: 'utf-8'});
`
//cachebuster commen

const WeeklyRecap7 = () => <Post source={md} />
export default WeeklyRecap7
