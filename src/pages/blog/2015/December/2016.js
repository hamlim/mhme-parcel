import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './2016.md',
  { encoding: 'utf-8' },
)

const TwentySixteen = () => <Post source={md} />
export default TwentySixteen
