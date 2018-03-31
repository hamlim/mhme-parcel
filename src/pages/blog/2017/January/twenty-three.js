import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/twentythree.md',
  { encoding: 'utf-8' },
)

const TwentyThree = () => <Post source={md} />
export default TwentyThree
