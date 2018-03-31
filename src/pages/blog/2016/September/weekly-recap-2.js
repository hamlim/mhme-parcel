import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/wr2.md',
  { encoding: 'utf-8' },
)

const WeeklyRecap2 = () => <Post source={md} />
export default WeeklyRecap2
