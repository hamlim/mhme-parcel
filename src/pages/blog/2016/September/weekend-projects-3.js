import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './wp3.md',
  { encoding: 'utf-8' },
)

const WeekendProjects3 = () => <Post source={md} />
export default WeekendProjects3
