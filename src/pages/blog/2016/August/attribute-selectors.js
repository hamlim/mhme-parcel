import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/attribute-selectors.md',
  { encoding: 'utf-8' },
)

const AttributeSelectors = () => <Post source={md} />
export default AttributeSelectors
