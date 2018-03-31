import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './eighteen.md',
  { encoding: 'utf-8' },
)

const Eighteen = () => <Post source={md} />
export default Eighteen
