import React from 'react'
import BlogListing from '../../../components/blog-listing'

import January from './January/index.js'
import April from './April/index.js'
import May from './May/index.js'
import July from './July/index.js'
import September from './September/index.js'
import October from './October/index.js'

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
      {
        name: 'July',
        route: withLocal('July'),
        component: July,
      },
      {
        name: 'September',
        route: withLocal('September'),
        component: September,
      },
      {
        name: 'October',
        route: withLocal('October'),
        component: October,
      },
    ]}
  />
)
export default TwentyEighteen
