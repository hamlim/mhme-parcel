import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/links.md',
  { encoding: 'utf-8' },
)

const Links = () => <Post source={md} />
export default Links
