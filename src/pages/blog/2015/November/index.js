import React, { Fragment } from 'react'
import { Match, Link } from '@reach/router'
import Thanksgiving from './thanksgiving'
import ANewLook from './a-new-look'
import WeekendProjects from './weekend-projects'
import ANewResume from './a-new-resume'
import FamilyTime from './family-time'
import Message from './message'

const local = '/blog/2015/November/'

const November = () => (
  <Fragment>
    <Match
      path="/blog/2015/November"
      children={r =>
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
    <Thanksgiving path={`${local}Thanksgiving`} />
    <ANewLook path={`${local}a-new-look`} />
    <WeekendProjects path={`${local}weekend-projects`} />
    <ANewResume path={`${local}a-new-resume`} />
    <FamilyTime path={`${local}family-time`} />
    <Message path={`${local}message`} />
  </Fragment>
)

export default November
