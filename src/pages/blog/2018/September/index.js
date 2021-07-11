import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import YouveLaunchedNowWhat from './youve-launched-now-what.mdx'

const local = '/2018/September'

const withLocal = r => `${r}/*`

const September2018 = () => (
  <BlogListing
    title={<h3>September - 2018</h3>}
    path={local}
    routes={[
      {
        name: "You've Launched, Now What?",
        route: `youve-launched-now-what`,
      },
    ]}
  >
    <YouveLaunchedNowWhat path={withLocal(`youve-launched-now-what`)} />
  </BlogListing>
)

export default September2018
