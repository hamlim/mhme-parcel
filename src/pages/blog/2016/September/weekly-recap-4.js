import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/wr4.md',
  { encoding: 'utf-8' },
)

const WeeklyRecap4 = () => <Post source={md} />
export default WeeklyRecap4
