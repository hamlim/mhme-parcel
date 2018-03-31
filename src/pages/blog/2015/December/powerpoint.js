import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './Powerpoint.md',
  { encoding: 'utf-8' },
)

const Powerpoint = () => <Post source={md} />
export default Powerpoint
