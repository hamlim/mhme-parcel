import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import MattsLogOctober from './matts-log-october.mdx'

const local = '/blog/2018/October'

const withLocal = r => `${local}/${r}`

const October2018 = () => (
  <BlogListing
    title={<h3>October - 2018</h3>}
    path={local}
    routes={[
      {
        name: "Matts Log - October",
        route: withLocal(`matts-log-october`),
        component: MattsLogOctober,
      },
    ]}
  />
)

export default October2018
