import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./attribute-selectors.md'), {encoding: 'utf-8'});
`
//cachebuster comment

const AttributeSelectors = () => <Post source={md} />
export default AttributeSelectors
