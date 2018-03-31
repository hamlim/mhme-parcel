import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './september.md',
  { encoding: 'utf-8' },
)

const September = () => <Post source={md} />
export default September
