import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/githubisapain.md',
  { encoding: 'utf-8' },
)

const GithubIsAPain = () => <Post source={md} />
export default GithubIsAPain
