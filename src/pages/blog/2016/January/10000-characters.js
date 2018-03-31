import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/10000characters.md',
  { encoding: 'utf-8' },
)

const TenthousandCharacters = () => <Post source={md} />
export default TenthousandCharacters
