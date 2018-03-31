import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/Javascriptwierdness.md',
  { encoding: 'utf-8' },
)

const WackyJavascript = () => <Post source={md} />
export default WackyJavascript
