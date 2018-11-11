import React, { Fragment } from 'react'
import { Link, Match } from '@reach/router'
import CSSDebate from './css-debate'
import October4th from './october-4th'
import Pixel from './pixel'
import Pseudoclasses from './pseudo-classes'
import PseudoElements from './pseudo-elements'
import SMR1 from './smr1'
import StateOfMyProjects from './state-of-my-projects'
import WeekendProjects6 from './wp6'
import WeekendProjects7 from './wp7'
import WeeklyRecap5 from './wr5'
import WeeklyRecap6 from './wr6'
import WeeklyRecap7 from './wr7'

const local = '/blog/2016/October/'

const October2016 = () => (
  <Fragment>
    <Match path="/blog/2016/October">
      {r =>
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
              <li>
                <Link to={`${local}sunday-morning-recap-1`}>
                  Sunday Morning Recap vol. 1
                </Link>
              </li>
              <li>
                <Link to={`${local}state-of-my-projects`}>
                  State of My Projects
                </Link>
              </li>
              <li>
                <Link to={`${local}weekend-projects-6`}>
                  Weekend Projects vol. 6
                </Link>
              </li>
              <li>
                <Link to={`${local}weekend-projects-7`}>
                  Weekend Projects vol. 7
                </Link>
              </li>
              <li>
                <Link to={`${local}weekly-recap-5`}>Weekly Recap vol. 5</Link>
              </li>
              <li>
                <Link to={`${local}weekly-recap-6`}>Weekly Recap vol. 6</Link>
              </li>
              <li>
                <Link to={`${local}weekly-recap-7`}>Weekly Recap vol. 7</Link>
              </li>
            </ul>
          </Fragment>
        )
      }
    </Match>
    <CSSDebate path={`${local}css-debate`} />
    <October4th path={`${local}october-4th`} />
    <Pixel path={`${local}pixel`} />
    <Pseudoclasses path={`${local}pseudo-classes`} />
    <PseudoElements path={`${local}pseudo-elements`} />
    <SMR1 path={`${local}sunday-morning-recap-1`} />
    <StateOfMyProjects path={`${local}state-of-my-projects`} />
    <WeekendProjects6 path={`${local}weekend-projects-6`} />
    <WeekendProjects7 path={`${local}weekend-projects-7`} />
    <WeeklyRecap5 path={`${local}weekly-recap-5`} />
    <WeeklyRecap6 path={`${local}weekly-recap-6`} />
    <WeeklyRecap7 path={`${local}weekly-recap-7`} />
  </Fragment>
)

export default October2016
