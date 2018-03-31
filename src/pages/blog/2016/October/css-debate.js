import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './cssdebate.md',
  { encoding: 'utf-8' },
)

const CSSDebate = () => <Post source={md} />
export default CSSDebate
