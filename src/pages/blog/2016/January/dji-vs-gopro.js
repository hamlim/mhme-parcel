import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/DJIvsGoPro.md',
  { encoding: 'utf-8' },
)

const DJIvsGoPro = () => <Post source={md} />
export default DJIvsGoPro
