import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'

import April from './April/index.js'
import August from './August/index.js'

const local = '/blog/2016/'

const TwentySixteen = () => (
  <Fragment>
    <Route path={`${local}April`} component={April} />
    <Route path={`${local}August`} component={August} />
    <Route
      path="/blog/2016"
      exact
      render={r =>
        r.match && (
          <Fragment>
            <h3>2016</h3>
            <ul>
              <li>
                <Link to={`${local}April`}>April</Link>
              </li>
              <li>
                <Link to={`${local}August`}>August</Link>
              </li>
            </ul>
          </Fragment>
        )
      }
    />
  </Fragment>
)
export default TwentySixteen
