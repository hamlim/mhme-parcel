import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import setup from './setup'

import Navigation from './src/components/navigation.js'

import Landing from './src/pages/landing.js'
import Blog from './src/pages/blog/index.js'
import Projects from './src/pages/projects.js'

const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <Route
        render={({ location }) => (
          <Fragment>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route path="/" exact component={Landing} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/projects" component={Projects} />
                  <Route render={() => <div>404 - 😱 Oh No you found a page that doesn't exist!</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Fragment>
        )}
      />
    </Fragment>
  </Router>
)

const elem = document.querySelector('#root')

setup()

render(<App />, elem)
