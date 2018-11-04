import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import MissingDetail from './missing-detail.mdx'

const local = '/blog/2018/November'

const withLocal = r => `${local}/${r}`

const November2018 = () => (
  <BlogListing
    title={<h3>November - 2018</h3>}
    path={local}
    routes={[
      {
        name: 'Missing Detail',
        route: withLocal(`missing-detail`),
        component: MissingDetail,
      },
    ]}
  />
)

export default November2018
