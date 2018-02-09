import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./redesign-v5.md'), {encoding: 'utf-8'});
`

const RedesignV5 = () => <Post source={md} />
export default RedesignV5
