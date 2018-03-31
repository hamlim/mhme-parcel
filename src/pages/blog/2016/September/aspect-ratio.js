import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/aspectratio.md',
  { encoding: 'utf-8' },
)

const AspectRatio = () => <Post source={md} />
export default AspectRatio
