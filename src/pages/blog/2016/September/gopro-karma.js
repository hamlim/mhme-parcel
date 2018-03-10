import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./goprokarma.md'), {encoding: 'utf-8'});
`
//cachebuster commen

const GoProKarma = () => <Post source={md} />
export default GoProKarma
