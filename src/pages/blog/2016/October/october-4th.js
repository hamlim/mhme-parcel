import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/october4th.md',
  { encoding: 'utf-8' },
)

const October4th = () => <Post source={md} />
export default October4th
