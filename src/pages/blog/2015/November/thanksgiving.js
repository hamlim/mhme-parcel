import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./thanksgiving.md'), {encoding: 'utf-8'});
`

const Thanksgiving = () => <Post source={md} />
export default Thanksgiving
