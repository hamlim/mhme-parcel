import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./2015.md'), {encoding: 'utf-8'});
`

const TwentyFifteen = () => <Post source={md} />
export default TwentyFifteen
