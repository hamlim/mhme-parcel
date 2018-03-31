import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './weekend-projects.md',
  { encoding: 'utf-8' },
)

const WeekendProjects = () => <Post source={md} />
export default WeekendProjects
