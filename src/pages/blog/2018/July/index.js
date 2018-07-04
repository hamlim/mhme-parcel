import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import TakingABreak from './taking-a-break.mdx'

const AppliedTakingABreak = () => (
  <TakingABreak
    components={{ pre: p => <pre className="hljs" {...p} /> }}
  />
)

const local = '/blog/2018/July'

const withLocal = r => `${local}/${r}`

const July2018 = () => (
  <BlogListing
    title={<h3>July - 2018</h3>}
    path={local}
    routes={[
      {
        name: 'Taking a Break',
        route: withLocal(`taking-a-break`),
        component: AppliedTakingABreak,
      },
    ]}
  />
)

export default July2018
