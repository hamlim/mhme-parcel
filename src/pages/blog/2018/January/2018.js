import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './2018.md',
  { encoding: 'utf-8' },
)

const TwentyEighteen = () => <Post source={md} />
export default TwentyEighteen
