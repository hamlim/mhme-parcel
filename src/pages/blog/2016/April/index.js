import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import Redesign from './redesign'

const local = '/blog/2016/April/'

const TwentySixteenApril = () => (
  <Fragment>
    <Route
      path="/blog/2016/April"
      exact
      render={r =>
        r.match && (
          <Fragment>
            <h3>April - 2016</h3>
            <ul>
              <li>
                <Link to={`${local}redesign`}>Redesign</Link>
              </li>
            </ul>
          </Fragment>
        )
      }
    />
    <Route path={`${local}redesign`} component={Redesign} />
  </Fragment>
)

export default TwentySixteenApril
