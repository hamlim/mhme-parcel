import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/Redesignv6.md',
  { encoding: 'utf-8' },
)

const RedesignV6 = () => <Post source={md} />
export default RedesignV6
