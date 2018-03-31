import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/TwentyEight.md',
  { encoding: 'utf-8' },
)

const TwentyEight = () => <Post source={md} />
export default TwentyEight
