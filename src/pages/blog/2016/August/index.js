import React, { Fragment } from 'react'
import BlogListing from '../../../../components/blog-listing.js'
import AttributeSelectors from './attribute-selectors.mdx'
import August from './august.mdx'
import RedesignV5 from './redesign-v5.mdx'
import PullQuotes from './pull-quotes.mdx'
import MyNewWebsite from './my-new-website.mdx'

const local = '/blog/2016/August'

const withLocal = path => `${path}/*`

const TwentySixteenApril = () => (
  <BlogListing
    title={<h3>August - 2016</h3>}
    path={local}
    routes={[
      {
        name: 'August',
        route: 'august',
      },
      {
        name: 'Attribute Selectors',
        route: 'attributes-selectors',
      },
      {
        name: 'Redesign V5',
        route: 'redesign-v5',
      },
      {
        name: 'Pull Quotes',
        route: 'pull-quotes',
      },
      {
        name: 'My New Website',
        route: 'my-new-website',
      },
    ]}
  >
    <AttributeSelectors path={withLocal('attribute-selectors')} />
    <August path={withLocal('august')} />
    <MyNewWebsite path={withLocal('my-new-website')} />
    <PullQuotes path={withLocal('pull-quotes')} />
    <RedesignV5 path={withLocal('redesign-v5')} />
  </BlogListing>
)

export default TwentySixteenApril
