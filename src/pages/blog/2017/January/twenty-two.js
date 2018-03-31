import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './twentytwo.md',
  { encoding: 'utf-8' },
)

const TwentyTwo = () => <Post source={md} />
export default TwentyTwo
