import React from 'react'

import BlogListing from '../../../../components/blog-listing'
import Calendar from './calendar'
import WackyJavascript from './javascript-wierdness'
import RebuildingMustache from './rebuilding-mustache'
import RedesignV6 from './redesign-v6'
import SomeQuickNotes from './some-quick-notes'

const local = '/blog/2017/March'

const withLocal = r => `${local}/${r}`

const March2017 = () => (
  <BlogListing
    title={<h3>March - 2017</h3>}
    path={local}
    routes={[
      { name: 'Calendar', route: withLocal(`calendar`), component: Calendar },
      { name: 'Javascript Wierdness', route: withLocal(`javascript-wierdness`), component: WackyJavascript },
      { name: 'Rebuilding Mustache', route: withLocal(`rebuilding-javascript`), component: RebuildingMustache },
      { name: 'Redesign v6', route: withLocal(`redesign-v6`), component: RedesignV6 },
      { name: 'Some Quick Notes', route: withLocal(`some-quick-notes`), component: SomeQuickNotes },
    ]}
  />
)

export default March2017
