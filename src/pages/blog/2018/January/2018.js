import React from 'react'
import Markdown from 'markdown-to-jsx'
import markdownConfig from '../../../../utils/markedConfig.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./2018.md'), {encoding: 'utf-8'});
`

const TwentyEighteen = () => (
  <article>
    <Markdown options={markdownConfig} children={md} />
  </article>
)
export default TwentyEighteen
