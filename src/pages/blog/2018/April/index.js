import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import UnderstandingReact163Updates from './understanding-react-16-3-updates.js'

const local = '/blog/2018/April'

const withLocal = r => `${local}/${r}`

const April2018 = () => (
  <BlogListing
    title={<h3>April - 2018</h3>}
    path={local}
    routes={[
      {
        name: 'Understanding React 16.3 Updates',
        route: withLocal(
          `understanding-react-16-3-updates`,
        ),
        component: UnderstandingReact163Updates,
      },
    ]}
  />
)

export default April2018
