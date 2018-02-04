import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import TwentyFifteen from './2015/index.js'

import TwentyEighteen from './2018/January/2018.js'

const Blog = () => (
  <Fragment>
    <Route path="/blog/2015" component={TwentyFifteen} />
    <Link to="/blog/2015">2015</Link>
  </Fragment>
)
export default Blog
