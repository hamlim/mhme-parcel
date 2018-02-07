import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import Thanksgiving from './thanksgiving'
import ANewLook from './a-new-look'
import WeekendProjects from './weekend-projects'
import ANewResume from './a-new-resume'
import FamilyTime from './family-time'
import Message from './message'

const local = '/blog/2015/November/'

const November = () => (
  <Fragment>
    <Route
      path="/blog/2015/November"
      exact
      render={r =>
        r.match && (
          <Fragment>
            <h3>November - 2015</h3>
            <ul>
              <li>
                <Link to={`${local}Thanksgiving`}>Thanksgiving</Link>
              </li>
              <li>
                <Link to={`${local}a-new-look`}>A New Look</Link>
              </li>
              <li>
                <Link to={`${local}weekend-projects`}>Weekend Projects</Link>
              </li>
              <li>
                <Link to={`${local}a-new-resume`}>A New Resume</Link>
              </li>
              <li>
                <Link to={`${local}family-time`}>Family Time</Link>
              </li>
              <li>
                <Link to={`${local}message`}>Message</Link>
              </li>
            </ul>
          </Fragment>
        )
      }
    />
    <Route path={`${local}Thanksgiving`} component={Thanksgiving} />
    <Route path={`${local}a-new-look`} component={ANewLook} />
    <Route path={`${local}weekend-projects`} component={WeekendProjects} />
    <Route path={`${local}a-new-resume`} component={ANewResume} />
    <Route path={`${local}family-time`} component={FamilyTime} />
    <Route path={`${local}message`} component={Message} />
  </Fragment>
)

export default November
