import React, { Fragment } from 'react'
import { Match, Link } from '@reach/router'
import AttributeSelectors from './attribute-selectors'
import August from './august'
import RedesignV5 from './redesign-v5'
import PullQuotes from './pull-quotes'
import MyNewWebsite from './my-new-website'

const local = '/blog/2016/August/'

const TwentySixteenApril = () => (
  <Fragment>
    <Match
      path="/blog/2016/August"
      children={r =>
        r.match && (
          <Fragment>
            <h3>August - 2016</h3>
            <ul>
              <li>
                <Link to={`${local}attribute-selectors`}>
                  Attribute Selectors
                </Link>
              </li>
              <li>
                <Link to={`${local}august`}>August</Link>
              </li>
              <li>
                <Link to={`${local}my-new-website`}>My New Website</Link>
              </li>
              <li>
                <Link to={`${local}pull-quotes`}>Pull Quotes</Link>
              </li>
              <li>
                <Link to={`${local}redesign-v5`}>Redesign v5</Link>
              </li>
            </ul>
          </Fragment>
        )
      }
    />
    <AttributeSelectors path={`${local}attribute-selectors`} />
    <August path={`${local}august`} />
    <MyNewWebsite path={`${local}my-new-website`} />
    <PullQuotes path={`${local}pull-quotes`} />
    <RedesignV5 path={`${local}redesign-v5`} />
  </Fragment>
)

export default TwentySixteenApril
