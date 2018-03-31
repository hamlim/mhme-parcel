import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/twenty.md',
  { encoding: 'utf-8' },
)

const Twenty = () => <Post source={md} />
export default Twenty
