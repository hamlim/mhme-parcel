import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/2015.md',
  { encoding: 'utf-8' },
)

const TwentyFifteen = () => <Post source={md} />
export default TwentyFifteen
