import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'

import December from './December/index.js'
import November from './November/index.js'

const local = '/blog/2015/'

const TwentyFifteen = () => (
  <Fragment>
    <Route path={`${local}December`} component={December} />
    <Route path={`${local}November`} component={November} />
    <Route
      path="/blog/2015"
      exact
      render={r =>
        r.match && (
          <Fragment>
            <Link to={`${local}December`}>December</Link>
            <Link to={`${local}November`}>November</Link>
          </Fragment>
        )
      }
    />
  </Fragment>
)
export default TwentyFifteen
