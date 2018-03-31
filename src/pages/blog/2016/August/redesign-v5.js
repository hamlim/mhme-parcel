import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/redesign-v5.md',
  { encoding: 'utf-8' },
)

const RedesignV5 = () => <Post source={md} />
export default RedesignV5
