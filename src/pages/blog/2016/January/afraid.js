import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/afraid.md',
  { encoding: 'utf-8' },
)

const Afraid = () => <Post source={md} />
export default Afraid
