import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/CSSinJS.md',
  { encoding: 'utf-8' },
)

const CSSinJS = () => <Post source={md} />
export default CSSinJS
