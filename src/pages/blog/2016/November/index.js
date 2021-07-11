import React, { Fragment } from 'react'
import { Match, Link } from '@reach/router'
import Links from './links'

const local = '/blog/2016/November/'

const November2016 = () => (
  <Fragment>
    <Match
      path="/blog/2016/November"
      children={r =>
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
    <Links path={`${local}links`} />
  </Fragment>
)

export default November2016
