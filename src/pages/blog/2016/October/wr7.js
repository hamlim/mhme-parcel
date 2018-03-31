import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './wr7.md',
  { encoding: 'utf-8' },
)

const WeeklyRecap7 = () => <Post source={md} />
export default WeeklyRecap7
