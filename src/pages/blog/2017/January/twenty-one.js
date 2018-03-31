import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/twentyone.md',
  { encoding: 'utf-8' },
)

const TwentyOne = () => <Post source={md} />
export default TwentyOne
