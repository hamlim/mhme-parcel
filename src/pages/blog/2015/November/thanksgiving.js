import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './thanksgiving.md',
  { encoding: 'utf-8' },
)

const Thanksgiving = () => <Post source={md} />
export default Thanksgiving
