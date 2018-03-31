import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/lmsredesign.md',
  { encoding: 'utf-8' },
)

const LMSRedesign = () => <Post source={md} />
export default LMSRedesign
