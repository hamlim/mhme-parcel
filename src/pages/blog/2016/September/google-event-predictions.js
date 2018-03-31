import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './googleeventpredictions.md',
  { encoding: 'utf-8' },
)

const GoogleEventPredictions = () => <Post source={md} />
export default GoogleEventPredictions
