import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import Links from './links'

const local = '/blog/2016/November/'

const November2016 = () => (
  <Fragment>
    <Route
      path="/blog/2016/November"
      exact
      render={r =>
        r.match && (
          <Fragment>
            <h3>November - 2016</h3>
            <ul>
              <li>
                <Link to={`${local}links`}>Links</Link>
              </li>
            </ul>
          </Fragment>
        )
      }
    />
    <Route path={`${local}links`} component={Links} />
  </Fragment>
)

export default November2016
