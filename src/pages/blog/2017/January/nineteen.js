import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './nineteen.md',
  { encoding: 'utf-8' },
)

const Nineteen = () => <Post source={md} />
export default Nineteen
