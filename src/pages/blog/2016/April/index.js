import React, { Fragment } from 'react'
import { Match, Link } from '@reach/router'
import Redesign from './redesign'

const local = '/blog/2016/April/'

const TwentySixteenApril = () => (
  <Fragment>
    <Match
      path="/blog/2016/April"
      children={r =>
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
    <Redesign path={`${local}redesign`} />
  </Fragment>
)

export default TwentySixteenApril
