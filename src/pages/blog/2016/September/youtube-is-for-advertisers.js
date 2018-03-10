import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./youtubeisforadvertisers.md'), {encoding: 'utf-8'});
`
//cachebuster commen

const Youtube = () => <Post source={md} />
export default Youtube
