import React, { Fragment, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import setup from './setup'
import { Router, Location } from '@reach/router'

import Navigation from './components/navigation.js'

import Landing from './pages/landing.js'

const Blog = lazy(() => import('./pages/blog/index.js'))
const Projects = lazy(() => import('./pages/projects.js'))
const ReactStateReducer = lazy(() => import('./pages/react-state-reducer.js'))
const Recycles = lazy(() => import('./pages/recycles.js'))
const FourOhFour = lazy(() => import('./pages/404.js'))

const Route = ({ children, ...props }) => children(props)

const Wrapper = ({ children }) => children

const App = () => (
  <>
    <Router>
      <Navigation default />
    </Router>
    <Location>
      {({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Router location={location}>
              <Wrapper default>
                <Suspense fallback="..." default>
                  <Landing path="/" />
                  <Blog path="/blog" />
                  <Projects path="/projects" />
                  <ReactStateReducer path="/react-state-reducer" />
                  <Recycles path="/recycles" />
                  <Recycles default />
                </Suspense>
              </Wrapper>
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  </>
)

const elem = document.querySelector('#root')

setup()
createRoot(elem).render(<App />)
