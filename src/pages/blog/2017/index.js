import React from 'react'
import BlogListing from '../../../components/blog-listing'

import April from './April/index.js'
import January from './January/index.js'
import March from './March/index.js'

const local = '/blog/2017'

const withLocal = r => r

const localPath = path => `${path}/*`

const TwentySeventeen = () => (
  <BlogListing
    title={<h3>2017</h3>}
    path={localPath(local)}
    routes={[
      {
        name: 'January',
        route: withLocal(`January`),
      },
      {
        name: 'March',
        route: withLocal(`March`),
      },
      {
        name: 'April',
        route: withLocal(`April`),
      },
    ]}
  >
    <January path={localPath('January')} />
    <March path={localPath('March')} />
    <April path={localPath('April')} />
  </BlogListing>
)
export default TwentySeventeen
