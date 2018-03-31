import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/wp6.md',
  { encoding: 'utf-8' },
)

const WeekendProjects6 = () => <Post source={md} />
export default WeekendProjects6
