import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './goprokarma.md',
  { encoding: 'utf-8' },
)

const GoProKarma = () => <Post source={md} />
export default GoProKarma
