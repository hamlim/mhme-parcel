import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./The-Social-Max.md'), {encoding: 'utf-8'});
`

const TheSocialMax = () => <Post source={md} />
export default TheSocialMax
