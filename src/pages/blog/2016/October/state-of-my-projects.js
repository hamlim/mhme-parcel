import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/Stateofmyprojects.md',
  { encoding: 'utf-8' },
)

const StateOfMyProjects = () => <Post source={md} />
export default StateOfMyProjects
