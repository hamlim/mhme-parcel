import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./rfpdatabaseapi.md'), {encoding: 'utf-8'});
`
//cachebuster commen

const DatabaseAPI = () => <Post source={md} />
export default DatabaseAPI
