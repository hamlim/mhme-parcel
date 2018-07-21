import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import setup from './setup'

import Navigation from './components/navigation.js'

import Landing from './pages/landing.js'

class Lazy extends React.Component {
  // Rendering an empty span because of this bug in react transition group
  // https://github.com/reactjs/react-transition-group/issues/208
  state = { mod: { default: () => <span /> } }
  componentDidMount() {
    this.props
      .mod()
      .then(mod => {
        this.setState({ mod })
      })
      .catch(console.error)
  }
  render() {
    return this.props.children(this.state)
  }
}

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
                  <Route path="/blog">
                    {rProps => (
                      <Lazy mod={() => import('./pages/blog/index.js')}>
                        {({ mod }) => <mod.default {...rProps} />}
                      </Lazy>
                    )}
                  </Route>
                  <Route path="/projects">
                    {rProps => (
                      <Lazy mod={() => import('./pages/projects.js')}>
                        {({ mod }) => <mod.default {...rProps} />}
                      </Lazy>
                    )}
                  </Route>
                  <Route path="/react-state-reducer">
                    {rProps => (
                      <Lazy
                        mod={() => import('./pages/react-state-reducer.js')}
                      >
                        {({ mod }) => <mod.default {...rProps} />}
                      </Lazy>
                    )}
                  </Route>
                  <Route path="/recycles">
                    {rProps => (
                      <Lazy mod={() => import('./pages/recycles.js')}>
                        {({ mod }) => <mod.default {...rProps} />}
                      </Lazy>
                    )}
                  </Route>
                  <Route>
                    {rProps => (
                      <Lazy mod={() => import('./pages/404.js')}>
                        {({ mod }) => <mod.default {...rProps} />}
                      </Lazy>
                    )}
                  </Route>
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
