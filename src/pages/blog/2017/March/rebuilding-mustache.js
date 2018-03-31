import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './rebuildingMustache.md',
  { encoding: 'utf-8' },
)

const RebuildingMustache = () => <Post source={md} />
export default RebuildingMustache
