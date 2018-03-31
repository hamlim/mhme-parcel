import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/sick.md',
  { encoding: 'utf-8' },
)

const Sick = () => <Post source={md} />
export default Sick
