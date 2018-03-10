import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./2018.md'), {encoding: 'utf-8'});
`
// cache busting comment

const TwentyEighteen = () => <Post source={md} />
export default TwentyEighteen
