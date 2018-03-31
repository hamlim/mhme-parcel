import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './wr3.md',
  { encoding: 'utf-8' },
)

const WeeklyRecap3 = () => <Post source={md} />
export default WeeklyRecap3
