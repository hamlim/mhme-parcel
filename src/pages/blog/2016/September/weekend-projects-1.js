import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./wp1.md'), {encoding: 'utf-8'});
`
//cachebuster commen

const WeekendProjects1 = () => <Post source={md} />
export default WeekendProjects1
