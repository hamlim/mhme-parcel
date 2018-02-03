import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import TwentyEighteen from './2018/January/2018.js'

const Blog = () => (
  <Fragment>
    <Route path="/blog/2018/january/2018" component={TwentyEighteen} />
    <Link to="/blog/2018/january/2018">2018</Link>
  </Fragment>
)
export default Blog
