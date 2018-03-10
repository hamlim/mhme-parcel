import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import BlogListing from '../../../components/blog-listing'

import April from './April/index.js'
import August from './August/index.js'
import January from './January/index.js'
import November from './November/index.js'
import October from './October/index'

const local = '/blog/2016/'

const TwentySixteen = () => (
  <BlogListing
    title={<h3>2016</h3>}
    path={'/blog/2016'}
    routes={[
      {
        name: 'January',
        route: `${local}January`,
        component: January,
      },
      {
        name: 'April',
        route: `${local}April`,
        component: April,
      },
      {
        name: 'August',
        route: `${local}August`,
        component: August,
      },
      {
        name: 'November',
        route: `${local}November`,
        component: November,
      },
      {
        name: 'October',
        route: `${local}October`,
        component: October,
      },
    ]}
  />
)
export default TwentySixteen
