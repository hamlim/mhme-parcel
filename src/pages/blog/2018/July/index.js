import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import TeamsAndLeadership from './teams-and-leadership.mdx'

const AppliedTeamsAndLeadership = () => (
  <TeamsAndLeadership
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
        name: 'On Teams and Leadership',
        route: withLocal(`teams-and-leadership`),
        component: AppliedTeamsAndLeadership,
      },
    ]}
  />
)

export default July2018
