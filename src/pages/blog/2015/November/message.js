import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./message.md'), {encoding: 'utf-8'});
`

const Message = () => <Post source={md} />
export default Message
