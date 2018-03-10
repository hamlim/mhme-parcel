import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'

import April from './April/index.js'
import August from './August/index.js'
import January from './January/index.js'
import November from './November/index.js'
import October from './October/index'

const local = '/blog/2016/'

const TwentySixteen = () => (
  <Fragment>
    <Route path={`${local}January`} component={January} />
    <Route path={`${local}April`} component={April} />
    <Route path={`${local}August`} component={August} />
    <Route path={`${local}November`} component={November} />
    <Route path={`${local}October`} component={October} />
    <Route
      path="/blog/2016"
      exact
      render={r =>
        r.match && (
          <Fragment>
            <h3>2016</h3>
            <ul>
              <li>
                <Link to={`${local}January`}>January</Link>
              </li>
              <li>
                <Link to={`${local}April`}>April</Link>
              </li>
              <li>
                <Link to={`${local}August`}>August</Link>
              </li>
              <li>
                <Link to={`${local}October`}>October</Link>
              </li>
              <li>
                <Link to={`${local}November`}>November</Link>
              </li>
            </ul>
          </Fragment>
        )
      }
    />
  </Fragment>
)
export default TwentySixteen
