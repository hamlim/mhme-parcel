import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import TakingABreak from './taking-a-break.mdx'
import Summer2018Trip from './summer-trip.mdx'

console.log(Summer2018Trip)

const AppliedTakingABreak = () => (
  <TakingABreak components={{ pre: p => <pre className="hljs" {...p} /> }} />
)

const local = '/blog/2018/July'

const withLocal = r => `${r}/*`

const July2018 = () => (
  <BlogListing
    title={<h3>July - 2018</h3>}
    path={local}
    routes={[
      {
        name: 'Taking a Break',
        route: `taking-a-break`,
      },
      {
        name: 'Summer 2018 Trip',
        route: `summer`,
      },
    ]}
  >
    <AppliedTakingABreak path={withLocal(`taking-a-break`)} />
    <Summer2018Trip path={withLocal(`summer`)} />
  </BlogListing>
)

export default July2018
