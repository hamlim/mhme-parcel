import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import CSSDebate from './css-debate'
import October4th from './october-4th'
import Pixel from './pixel'
import Pseudoclasses from './pseudo-classes'
import PseudoElements from './pseudo-elements'

const local = '/blog/2016/October/'

const October2016 = () => (
  <Fragment>
    <Route
      path="/blog/2016/October"
      exact
      render={r =>
        r.match && (
          <Fragment>
            <h3>October - 2016</h3>
            <ul>
              <li>
                <Link to={`${local}css-debate`}>CSS Debate</Link>
              </li>
              <li>
                <Link to={`${local}october-4th`}>October 4th</Link>
              </li>
              <li>
                <Link to={`${local}pixel`}>Pixel</Link>
              </li>
              <li>
                <Link to={`${local}pseudo-classes`}>Pseudo Classes</Link>
              </li>
              <li>
                <Link to={`${local}pseudo-elements`}>Pseudo Elements</Link>
              </li>
            </ul>
          </Fragment>
        )
      }
    />
    <Route path={`${local}css-debate`} component={CSSDebate} />
    <Route path={`${local}october-4th`} component={October4th} />
    <Route path={`${local}pixel`} component={Pixel} />
    <Route path={`${local}pseudo-classes`} component={Pseudoclasses} />
    <Route path={`${local}pseudo-classes`} component={PseudoElements} />
  </Fragment>
)

export default October2016
