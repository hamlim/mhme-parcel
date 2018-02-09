import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./my-new-website.md'), {encoding: 'utf-8'});
`

const MyNewWebsite = () => <Post source={md} />
export default MyNewWebsite
