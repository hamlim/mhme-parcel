import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import Powerpoint from './powerpoint'
import BloggingVsWorking from './blogging-vs-working'
import TheSocialMax from './the-social-max'
import TwentySixteen from './2016'
import TwentyFifteen from './2015'

const local = '/blog/2015/December/'

const TwentyFifteenDecember = () => (
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
        <Link to={`${local}blogging-vs-working`}>Blogging vs Working</Link>
      </li>
      <li>
        <Link to={`${local}the-social-max`}>The Social Max</Link>
      </li>
    </ul>
    <Route path={`${local}2015`} component={TwentyFifteen} />
    <Route path={`${local}2016`} component={TwentySixteen} />
    <Route path={`${local}powerpoint`} component={Powerpoint} />
    <Route path={`${local}blogging-vs-working`} component={BloggingVsWorking} />
    <Route path={`${local}the-social-max`} component={TheSocialMax} />
  </Fragment>
)

export default TwentyFifteenDecember
