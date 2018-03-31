import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './message.md',
  { encoding: 'utf-8' },
)

const Message = () => <Post source={md} />
export default Message
