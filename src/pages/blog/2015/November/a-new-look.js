import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./a-new-look.md'), {encoding: 'utf-8'});
`

const ANewLook = () => <Post source={md} />
export default ANewLook
