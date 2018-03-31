import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './smr1.md',
  { encoding: 'utf-8' },
)

const SMR1 = () => <Post source={md} />
export default SMR1
