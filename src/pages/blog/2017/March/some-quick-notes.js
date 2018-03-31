import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/Somequicknotes.md',
  { encoding: 'utf-8' },
)

const SomeQuickNotes = () => <Post source={md} />
export default SomeQuickNotes
