import React from 'react'
import Post from '../../../../components/post.js'
const md = require('fs').readFileSync(
  __dirname + './pull-quotes.md',
  { encoding: 'utf-8' },
)

const PullQuotes = () => <Post source={md} />
export default PullQuotes
