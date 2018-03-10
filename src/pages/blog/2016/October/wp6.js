import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./wp6.md'), {encoding: 'utf-8'});
`
//cachebuster comment

const WeekendProjects6 = () => <Post source={md} />
export default WeekendProjects6
