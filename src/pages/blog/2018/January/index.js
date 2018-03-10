import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import TwentyEighteen from './2018.js'

const local = '/blog/2018/January'

const withLocal = r => `${local}/${r}`

const January2018 = () => (
  <BlogListing
    title={<h3>January - 2018</h3>}
    path={local}
    routes={[
      {
        name: '2018',
        route: withLocal(`2018`),
        component: TwentyEighteen,
      },
    ]}
  />
)

export default January2018
