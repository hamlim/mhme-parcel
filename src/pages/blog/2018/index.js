import React from 'react'
import BlogListing from '../../../components/blog-listing'

import January from './January/index.js'
import April from './April/index.js'
import May from './May/index.js'

const local = '/blog/2018'

const withLocal = r => `${local}/${r}`

const TwentyEighteen = () => (
  <BlogListing
    title={<h3>2018</h3>}
    path={local}
    routes={[
      {
        name: 'January',
        route: withLocal(`January`),
        component: January,
      },
      {
        name: 'April',
        route: withLocal('April'),
        component: April,
      },
      {
        name: 'May',
        route: withLocal('May'),
        component: May,
      },
    ]}
  />
)
export default TwentyEighteen
