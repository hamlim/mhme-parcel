import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/pseudoelements.md',
  { encoding: 'utf-8' },
)

const PseudoElements = () => <Post source={md} />
export default PseudoElements
