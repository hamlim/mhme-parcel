import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/wp2.md',
  { encoding: 'utf-8' },
)

const WeekendProjects2 = () => <Post source={md} />
export default WeekendProjects2
