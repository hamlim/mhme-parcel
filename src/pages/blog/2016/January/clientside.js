import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './clientside.md',
  { encoding: 'utf-8' },
)

const ClientSide = () => <Post source={md} />
export default ClientSide
