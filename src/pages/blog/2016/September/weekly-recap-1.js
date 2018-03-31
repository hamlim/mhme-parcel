import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/wr1.md',
  { encoding: 'utf-8' },
)

const WeeklyRecap1 = () => <Post source={md} />
export default WeeklyRecap1
