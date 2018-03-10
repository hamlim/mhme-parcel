import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./buildingin2016.md'), {encoding: 'utf-8'});
`
//cachebuster comment

const BuildingIn2016 = () => <Post source={md} />
export default BuildingIn2016
