import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/a-new-look.md',
  { encoding: 'utf-8' },
)

const ANewLook = () => <Post source={md} />
export default ANewLook
