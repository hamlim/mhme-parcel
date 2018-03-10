import React from 'react'
import BlogListing from '../../../components/blog-listing'

import April from './April/index.js'
import January from './January/index.js'
import March from './March/index.js'

const local = '/blog/2017'

const withLocal = r => `${local}/${r}`

const TwentySeventeen = () => (
  <BlogListing
    title={<h3>2017</h3>}
    path={local}
    routes={[
      {
        name: 'January',
        route: withLocal(`January`),
        component: January,
      },
      {
        name: 'March',
        route: withLocal(`March`),
        component: March,
      },
      {
        name: 'April',
        route: withLocal(`April`),
        component: April,
      },
    ]}
  />
)
export default TwentySeventeen
