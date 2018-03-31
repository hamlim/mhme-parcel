import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './Spectacles.md',
  { encoding: 'utf-8' },
)

const Spectacles = () => <Post source={md} />
export default Spectacles
