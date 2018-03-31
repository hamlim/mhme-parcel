import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './The-Social-Max.md',
  { encoding: 'utf-8' },
)

const TheSocialMax = () => <Post source={md} />
export default TheSocialMax
