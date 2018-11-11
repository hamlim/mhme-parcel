import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import MissingDetail from './missing-detail.mdx'
import SuspensePlusGraphQL from './suspense-plus-graphql.mdx'

const AppliedSuspensePlusGraphQL = () => (
  <SuspensePlusGraphQL
    components={{ pre: p => <pre className="hljs" {...p} /> }}
  />
)

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
      {
        name: 'Composition Patterns of Components and Colocated Data',
        route: withLocal(`suspense-plus-graphql`),
        component: AppliedSuspensePlusGraphQL,
      },
    ]}
  />
)

export default November2018
