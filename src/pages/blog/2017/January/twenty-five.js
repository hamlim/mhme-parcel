import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './twentyfive.md',
  { encoding: 'utf-8' },
)

const TwentyFive = () => <Post source={md} />
export default TwentyFive
