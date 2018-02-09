import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs.js'
import Container from '../../components/container.js'

import TwentyFifteen from './2015/index.js'
import TwentySixteen from './2016/index.js'

const Blog = () => (
  <Container>
    <Breadcrumbs />
    <Route path="/blog/2015" component={TwentyFifteen} />
    <Route path="/blog/2016" component={TwentySixteen} />
    <Route
      path="/blog"
      exact
      render={r =>
        r.match && (
          <Fragment>
            <h3>Years:</h3>
            <ul>
              <li>
                <Link to="/blog/2015">2015</Link>
              </li>
              <li>
                <Link to="/blog/2016">2016</Link>
              </li>
            </ul>
          </Fragment>
        )
      }
    />
  </Container>
)
export default Blog
