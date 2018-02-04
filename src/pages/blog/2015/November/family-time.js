import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./family-time.md'), {encoding: 'utf-8'});
`

const FamilyTime = () => <Post source={md} />
export default FamilyTime
