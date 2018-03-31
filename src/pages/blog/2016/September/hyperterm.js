import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/hyperterm.md',
  { encoding: 'utf-8' },
)

const Hyperterm = () => <Post source={md} />
export default Hyperterm
