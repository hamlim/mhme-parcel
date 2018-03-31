import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './twentyseven.md',
  { encoding: 'utf-8' },
)

const TwentySeven = () => <Post source={md} />
export default TwentySeven
