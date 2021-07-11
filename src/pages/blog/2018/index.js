import React from 'react'
import BlogListing from '../../../components/blog-listing'

import January from './January/index.js'
import April from './April/index.js'
import May from './May/index.js'
import July from './July/index.js'
import September from './September/index.js'
import October from './October/index.js'
import November from './November/index.js'

const local = '/blog/2018'

const withLocal = r => `${r}`

const localPath = path => `${path}/*`

const TwentyEighteen = () => (
  <BlogListing
    title={<h3>2018</h3>}
    path={`${local}/*`}
    basePath={local}
    routes={[
      {
        name: 'January',
        route: withLocal(`January`),
      },
      {
        name: 'April',
        route: withLocal('April'),
      },
      {
        name: 'May',
        route: withLocal('May'),
      },
      {
        name: 'July',
        route: withLocal('July'),
      },
      {
        name: 'September',
        route: withLocal('September'),
      },
      {
        name: 'October',
        route: withLocal('October'),
      },
      {
        name: 'November',
        route: withLocal('November'),
      },
    ]}
  >
    <January path={localPath('January')} />
    <April path={localPath('April')} />
    <May path={localPath('May')} />
    <July path={localPath('July')} />
    <September path={localPath('September')} />
    <October path={localPath('October')} />
    <November path={localPath('November')} />
  </BlogListing>
)
export default TwentyEighteen
