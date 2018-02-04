import React from 'react'
import Container from '../../../components/container.js'
import { Link, Route } from 'react-router-dom'

import December from './December/index.js'
import November from './November/index.js'

const local = '/blog/2015/'

const TwentyFifteen = () => (
  <Container>
    <Route path={`${local}December`} component={December} />
    <Route path={`${local}November`} component={November} />

    <Link to={`${local}December`}>December</Link>
    <Link to={`${local}November`}>November</Link>
  </Container>
)
export default TwentyFifteen
