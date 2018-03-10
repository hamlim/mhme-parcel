import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./10000characters.md'), {encoding: 'utf-8'});
`
//cachebuster comment

const TenthousandCharacters = () => <Post source={md} />
export default TenthousandCharacters
