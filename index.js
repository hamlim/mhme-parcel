import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import setup from './setup'

import Navigation from './src/components/navigation.js'

import Landing from './src/pages/landing.js'
import Blog from './src/pages/blog/index.js'
import Projects from './src/pages/projects.js'

const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <Route path="/" exact component={Landing} />
      <Route path="/blog" component={Blog} />
      <Route path="/projects" component={Projects} />
    </Fragment>
  </Router>
)

const elem = document.querySelector('#root')

setup()

render(<App />, elem)
