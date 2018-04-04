import React, { Fragment } from 'react'
import Container from '../components/container.js'
import styled from 'react-emotion'
import { Flex, Box } from 'grid-emotion'
import hljs from 'highlight.js'
import Code from '../components/code.js'
import Button from '@atlaskit/button'

import {
  ComponentDidMount,
  ComponentWillUnmount,
} from 'recycles'

const P = styled('p')`
  margin: 1rem 0;
`
const Main = styled('main')`
  font-size: 1.3rem;
  margin-bottom: 3rem;
`

export default () => (
  <Container>
    <Main>
      <header>
        <h2>
          <code>Recycles</code>
        </h2>
      </header>
      <section>
        <P>
          Recycles is a collection of render-prop components
          that expose hooks into the component lifecycle
          methods of a React Component.
        </P>
      </section>
    </Main>
  </Container>
)
