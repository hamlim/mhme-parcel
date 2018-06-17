import React from 'react'

import BlogListing from '../../../../components/blog-listing'

import ComplexUIComponentsAndState from './complex-ui-components.mdx'

const AppliedComplexUIComponentsAndState = () => (
  <ComplexUIComponentsAndState
    components={{ pre: p => <pre className="hljs" {...p} /> }}
  />
)

const local = '/blog/2018/May'

const withLocal = r => `${local}/${r}`

const May2018 = () => (
  <BlogListing
    title={<h3>May - 2018</h3>}
    path={local}
    routes={[
      {
        name: 'Managing Complex UI Component State',
        route: withLocal(`complex-ui-components`),
        component: AppliedComplexUIComponentsAndState,
      },
    ]}
  />
)

export default May2018
