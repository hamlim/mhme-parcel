import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './Family-Time.md',
  { encoding: 'utf-8' },
)

//cache buste

const FamilyTime = () => <Post source={md} />
export default FamilyTime
