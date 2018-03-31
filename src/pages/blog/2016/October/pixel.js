import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/pixel.md',
  { encoding: 'utf-8' },
)

const Pixel = () => <Post source={md} />
export default Pixel
