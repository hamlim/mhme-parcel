import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './wp1.md',
  { encoding: 'utf-8' },
)

const WeekendProjects1 = () => <Post source={md} />
export default WeekendProjects1
