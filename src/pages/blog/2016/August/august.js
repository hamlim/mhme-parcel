import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/august.md',
  { encoding: 'utf-8' },
)

const August = () => <Post source={md} />
export default August
