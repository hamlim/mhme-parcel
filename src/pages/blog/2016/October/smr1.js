import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./smr1.md'), {encoding: 'utf-8'});
`
//cachebuster comment

const SMR1 = () => <Post source={md} />
export default SMR1
