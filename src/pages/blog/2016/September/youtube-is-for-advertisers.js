import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/youtubeisforadvertisers.md',
  { encoding: 'utf-8' },
)

const Youtube = () => <Post source={md} />
export default Youtube
