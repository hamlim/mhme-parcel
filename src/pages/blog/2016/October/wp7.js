import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/wp7.md',
  { encoding: 'utf-8' },
)

const WeekendProjects7 = () => <Post source={md} />
export default WeekendProjects7
