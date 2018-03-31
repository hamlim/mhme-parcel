import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/rfpdatabaseapi.md',
  { encoding: 'utf-8' },
)

const DatabaseAPI = () => <Post source={md} />
export default DatabaseAPI
