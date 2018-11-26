import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import TwentyEighteen from './2018.mdx'

const local = '/blog/2018/January'

const withLocal = r => `${r}/*`

const January2018 = () => (
  <BlogListing
    title={<h3>January - 2018</h3>}
    path={local}
    routes={[
      {
        name: '2018',
        route: `2018`,
      },
    ]}
  >
    <TwentyEighteen path={withLocal('2018')} />
  </BlogListing>
)

export default January2018
