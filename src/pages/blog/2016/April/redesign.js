import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './redesign.md',
  { encoding: 'utf-8' },
)

const Redesign = () => <Post source={md} />
export default Redesign
