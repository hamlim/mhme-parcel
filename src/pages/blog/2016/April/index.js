import React from 'react'
import BlogListing from '../../../../components/blog-listing.js'
import Redesign from './redesign.mdx'

const local = '/blog/2016/April/'

const withLocal = r => `${r}/*`

const TwentySixteenApril = () => (
  <BlogListing
    title={<h3>April - 2016</h3>}
    path={local}
    routes={[
      {
        name: 'Redesign',
        route: 'redesign',
      },
    ]}
  >
    <Redesign path={withLocal('redesign')} />
  </BlogListing>
)

export default TwentySixteenApril
