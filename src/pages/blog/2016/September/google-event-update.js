import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/googleeventupdates.md',
  { encoding: 'utf-8' },
)

const GoogleEventUpdates = () => <Post source={md} />
export default GoogleEventUpdates
