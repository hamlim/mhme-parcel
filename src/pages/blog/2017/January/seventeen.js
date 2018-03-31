import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/seventeen.md',
  { encoding: 'utf-8' },
)

const Seventeen = () => <Post source={md} />
export default Seventeen
