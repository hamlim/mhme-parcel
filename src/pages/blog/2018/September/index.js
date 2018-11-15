import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import YouveLaunchedNowWhat from './youve-launched-now-what.mdx'

const local = '/2018/September'

const withLocal = r => `${local}/${r}`

const September2018 = () => (
  <BlogListing
    title={<h3>September - 2018</h3>}
    path={local}
    routes={[
      {
        name: "You've Launched, Now What?",
        route: withLocal(`youve-launched-now-what`),
        component: YouveLaunchedNowWhat,
      },
    ]}
  />
)

export default September2018
