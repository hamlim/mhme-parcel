import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./wp7.md'), {encoding: 'utf-8'});
`
//cachebuster comment

const WeekendProjects7 = () => <Post source={md} />
export default WeekendProjects7
