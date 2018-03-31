import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/buildingin2016.md',
  { encoding: 'utf-8' },
)

const BuildingIn2016 = () => <Post source={md} />
export default BuildingIn2016
