import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './a-new-resume.md',
  { encoding: 'utf-8' },
)

const ANewResume = () => <Post source={md} />
export default ANewResume
