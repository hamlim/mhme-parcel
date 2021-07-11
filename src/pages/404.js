import React from 'react'
import { Link } from '@reach/router'
import Container from '../components/container'
import styled from '@emotion/styled'

const P = styled('p')`
  font-size: 2rem;
  margin: 10rem 0;
`

export default () => (
  <Container>
    <P>404 - 😱 Oh No you found a page that doesn't exist!</P>
    <P>
      If you are looking for something to read, check out this blog post{' '}
      <Link to="/blog/2016/November/links">Links</Link>
    </P>
  </Container>
)
