import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import setup from './setup'

import Navigation from './src/components/navigation.js'
import Landing from './src/pages/landing.js'

const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <Route path="/" exact component={Landing} />
    </Fragment>
  </Router>
)

const elem = document.querySelector('#root')

setup()

render(<App />, elem)
