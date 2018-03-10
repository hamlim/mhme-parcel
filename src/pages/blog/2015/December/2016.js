import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./2016.md'), {encoding: 'utf-8'});
`
// jfkdj

const TwentySixteen = () => <Post source={md} />
export default TwentySixteen
