import React from 'react'
import BlogListing from '../../../../components/blog-listing'
import Spectacles from './spectacles.mdx'
import CSSinJS from './css-in-js.mdx'

const local = '/blog/2017/April'

const withLocal = r => `${r}/*`

const April2017 = () => (
  <BlogListing
    title={<h3>April - 2017</h3>}
    path={local}
    routes={[
      {
        name: 'Spectacles',
        route: 'spectacles',
      },
      { name: 'CSS in JS', route: 'css-in-js' },
    ]}
  >
    <Spectacles path={withLocal('spectacles')} />
    <CSSinJS path={withLocal('css-in-js')} />
  </BlogListing>
)

export default April2017
