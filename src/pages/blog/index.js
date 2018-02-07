import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs.js'
import Container from '../../components/container.js'

import TwentyFifteen from './2015/index.js'

import TwentyEighteen from './2018/January/2018.js'

const Blog = () => (
  <Container>
    <Breadcrumbs />
    <Route path="/blog/2015" component={TwentyFifteen} />
    <Route
      path="/blog"
      exact
      render={r =>
        r.match && (
          <Fragment>
            <Link to="/blog/2015">2015</Link>
          </Fragment>
        )
      }
    />
  </Container>
)
export default Blog
