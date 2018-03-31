import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './BloggingvsWorking.md',
  { encoding: 'utf-8' },
)

const BloggingVsWorking = () => <Post source={md} />
export default BloggingVsWorking
