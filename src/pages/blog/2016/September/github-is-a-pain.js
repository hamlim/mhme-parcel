import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./githubisapain.md'), {encoding: 'utf-8'});
`
//cachebuster commen

const GithubIsAPain = () => <Post source={md} />
export default GithubIsAPain
