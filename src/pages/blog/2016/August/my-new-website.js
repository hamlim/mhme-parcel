import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './my-new-website.md',
  { encoding: 'utf-8' },
)

const MyNewWebsite = () => <Post source={md} />
export default MyNewWebsite
