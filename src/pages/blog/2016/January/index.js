import React, { Fragment } from 'react'
import { Match, Link } from '@reach/router'
import TenthousandCharacters from './10000-characters'
import Afraid from './afraid'
import BuildingIn2016 from './building-in-2016'
import ClientSide from './clientside'
import DJIvsGoPro from './dji-vs-gopro'
import LMSRedesign from './lms-redesign'
import FirstProject from './my-first-project-of-2016'

const local = '/blog/2016/January/'

const TwentySixteenJanuary = () => (
  <Fragment>
    <Match
      path="/blog/2016/January"
      children={r =>
        r.match && (
          <Fragment>
            <h3>January - 2016</h3>
            <ul>
              <li>
                <Link to={`${local}10000-characters`}>10,000 Characters</Link>
              </li>
              <li>
                <Link to={`${local}afraid`}>Afraid</Link>
              </li>
              <li>
                <Link to={`${local}building-in-2016`}>Building in 2016</Link>
              </li>
              <li>
                <Link to={`${local}clientside`}>Clientside</Link>
              </li>
              <li>
                <Link to={`${local}DJI-vs-GoPro`}>DJI vs GoPro</Link>
              </li>
              <li>
                <Link to={`${local}lms-redesign`}>LMS Redesign</Link>
              </li>
              <li>
                <Link to={`${local}my-first-project-of-2016`}>
                  My First Project of 2016
                </Link>
              </li>
            </ul>
          </Fragment>
        )
      }
    />
    <TenthousandCharacters path={`${local}10000-characters`} />
    <Afraid path={`${local}afraid`} />
    <BuildingIn2016 path={`${local}building-in-2016`} />
    <ClientSide path={`${local}clientside`} />
    <DJIvsGoPro path={`${local}DJI-vs-GoPro`} />
    <LMSRedesign path={`${local}lms-redesign`} />
    <FirstProject path={`${local}my-first-project-of-2016`} />
  </Fragment>
)

export default TwentySixteenJanuary
