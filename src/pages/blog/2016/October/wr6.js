import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './wr6.md',
  { encoding: 'utf-8' },
)

const WeeklyRecap6 = () => <Post source={md} />
export default WeeklyRecap6
