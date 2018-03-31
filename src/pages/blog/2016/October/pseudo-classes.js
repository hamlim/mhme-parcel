import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './pseudoclasses.md',
  { encoding: 'utf-8' },
)

const Pseudoclasses = () => <Post source={md} />
export default Pseudoclasses
