import React from 'react'
import BlogListing from '../../../../components/blog-listing'
import Spectacles from './spectacles'
import CSSinJS from './css-in-js'

const local = '/blog/2017/April'

const withLocal = r => `${local}/${r}`

const April2017 = () => (
  <BlogListing
    title={<h3>April - 2017</h3>}
    path={local}
    routes={[
      { name: 'Spectacles', route: withLocal(`spectacles`), component: Spectacles },
      { name: 'CSS in JS', route: withLocal(`css-in-js`), component: CSSinJS },
    ]}
  />
)

export default April2017
