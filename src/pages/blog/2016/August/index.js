import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import AttributeSelectors from './attribute-selectors'
import August from './august'
import RedesignV5 from './redesign-v5'
import PullQuotes from './pull-quotes'
import MyNewWebsite from './my-new-website'

const local = '/blog/2016/August/'

const TwentySixteenApril = () => (
  <Fragment>
    <Route
      path="/blog/2016/August"
      exact
      render={r =>
        r.match && (
          <Fragment>
            <h3>August - 2016</h3>
            <ul>
              <li>
                <Link to={`${local}attribute-selectors`}>Attribute Selectors</Link>
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
    <Route path={`${local}attribute-selectors`} component={AttributeSelectors} />
    <Route path={`${local}august`} component={August} />
    <Route path={`${local}my-new-website`} component={MyNewWebsite} />
    <Route path={`${local}pull-quotes`} component={PullQuotes} />
    <Route path={`${local}redesign-v5`} component={RedesignV5} />
  </Fragment>
)

export default TwentySixteenApril
