import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./wr1.md'), {encoding: 'utf-8'});
`
//cachebuster commen

const WeeklyRecap1 = () => <Post source={md} />
export default WeeklyRecap1
