import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './twentyfour.md',
  { encoding: 'utf-8' },
)

const TwentyFour = () => <Post source={md} />
export default TwentyFour
