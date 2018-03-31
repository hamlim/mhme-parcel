import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './myfirstprojectof2016.md',
  { encoding: 'utf-8' },
)

const FirstProject = () => <Post source={md} />
export default FirstProject
