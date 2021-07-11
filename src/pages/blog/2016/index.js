import React from 'react'
import BlogListing from '../../../components/blog-listing'

import April from './April/index.js'
import August from './August/index.js'
import January from './January/index.js'
import November from './November/index.js'
import October from './October/index'
import September from './September/index'

const local = '/blog/2016/'

const localPath = path => `${path}/*`

const TwentySixteen = () => (
  <BlogListing
    title={<h3>2016</h3>}
    path={local}
    routes={[
      {
        name: 'January',
        route: `January`,
      },
      {
        name: 'April',
        route: `April`,
      },
      {
        name: 'August',
        route: `August`,
      },
      {
        name: 'November',
        route: `November`,
      },
      {
        name: 'October',
        route: `October`,
      },
      {
        name: 'September',
        route: `September`,
      },
    ]}
  >
    <January route={localPath('January')} />
    <April route={localPath('April')} />
    <August route={localPath('August')} />
    <November route={localPath('November')} />
    <October route={localPath('October')} />
    <September route={localPath('September')} />
  </BlogListing>
)
export default TwentySixteen
