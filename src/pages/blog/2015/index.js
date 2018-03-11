import React from 'react'
import BlogListing from '../../../components/blog-listing'

import December from './December/index.js'
import November from './November/index.js'

const local = '/blog/2015'

const withLocal = r => `${local}/${r}`

const TwentyFifteen = () => (
  <BlogListing
    title={<h3>2015</h3>}
    path={local}
    routes={[
      {
        name: 'November',
        route: withLocal(`November`),
        component: November,
      },
      {
        name: 'December',
        route: withLocal(`December`),
        component: December,
      },
    ]}
  />
)
export default TwentyFifteen
