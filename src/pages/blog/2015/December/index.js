import React, { Fragment } from 'react'
import { Match, Link } from '@reach/router'
import Powerpoint from './powerpoint'
import BloggingVsWorking from './blogging-vs-working'
import TheSocialMax from './the-social-max'
import TwentySixteen from './2016'
import TwentyFifteen from './2015'

const local = '/blog/2015/December/'

const TwentyFifteenDecember = () => (
  <Fragment>
    <Match
      path="/blog/2015/December"
      children={r =>
        r.match && (
          <Fragment>
            <h3>December - 2015</h3>
            <ul>
              <li>
                <Link to={`${local}2015`}>2015</Link>
              </li>
              <li>
                <Link to={`${local}2016`}>2016</Link>
              </li>
              <li>
                <Link to={`${local}powerpoint`}>Powerpoint</Link>
              </li>
              <li>
                <Link to={`${local}blogging-vs-working`}>
                  Blogging vs Working
                </Link>
              </li>
              <li>
                <Link to={`${local}the-social-max`}>The Social Max</Link>
              </li>
            </ul>
          </Fragment>
        )
      }
    />
    <TwentyFifteen path={`${local}2015`} />
    <TwentySixteen path={`${local}2016`} />
    <Powerpoint path={`${local}powerpoint`} />
    <BloggingVsWorking path={`${local}blogging-vs-working`} />
    <TheSocialMax path={`${local}the-social-max`} />
  </Fragment>
)

export default TwentyFifteenDecember
