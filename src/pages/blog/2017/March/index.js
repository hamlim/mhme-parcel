import React from 'react'

import BlogListing from '../../../../components/blog-listing'
import Calendar from './Calendar.mdx'
import WackyJavascript from './javascript-wierdness.mdx'
import RebuildingMustache from './rebuilding-mustache.mdx'
import RedesignV6 from './redesign-v6.mdx'
import SomeQuickNotes from './some-quick-notes.mdx'

const local = '/blog/2017/March'

const withLocal = r => `${r}/*`

const March2017 = () => (
  <BlogListing
    title={<h3>March - 2017</h3>}
    path={local}
    routes={[
      { name: 'Calendar', route: 'calendar' },
      { name: 'Javascript Wierdness', route: 'javascript-wierdness' },
      { name: 'Rebuilding Mustache', route: 'rebuilding-mustache' },
      { name: 'Redesign v6', route: 'redesign-v6' },
      { name: 'Some Quick Notes', route: 'some-quick-notes' },
    ]}
  >
    <Calendar path={withLocal('calendar')} />
    <WackyJavascript path={withLocal('javascript-wierdness')} />
    <RebuildingMustache path={withLocal('rebuilding-mustache')} />
    <RedesignV6 path={withLocal('redesign-v6')} />
    <SomeQuickNotes path={withLocal('some-quick-notes')} />
  </BlogListing>
)

export default March2017
