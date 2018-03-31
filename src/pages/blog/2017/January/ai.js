import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/01-15-17-AI.md',
  { encoding: 'utf-8' },
)

const Ai = () => <Post source={md} />
export default Ai
