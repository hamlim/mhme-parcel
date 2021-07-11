import React, { Fragment, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import GlobalStyles from './setup'
import { Router, Location } from '@reach/router'

import Navigation from './components/navigation.js'

import Landing from './pages/landing.js'

const Blog = lazy(() => import('./pages/blog/index.js'))
const Projects = lazy(() => import('./pages/projects.js'))
const ReactStateReducer = lazy(() => import('./pages/react-state-reducer.js'))
const Recycles = lazy(() => import('./pages/recycles.js'))
const FourOhFour = lazy(() => import('./pages/404.js'))

const App = () => (
  <>
    <GlobalStyles />
    <Location>
      {({ location }) => (
        <>
          <Navigation />
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Suspense fallback="...">
                <Router location={location}>
                  <Landing path="/" />
                  <Blog path="/blog/*" />
                  <Projects path="/projects" />
                  <ReactStateReducer path="/react-state-reducer" />
                  <Recycles path="/recycles" />
                  <FourOhFour default />
                </Router>
              </Suspense>
            </CSSTransition>
          </TransitionGroup>
        </>
      )}
    </Location>
  </>
)

const elem = document.querySelector('#root')

createRoot(elem).render(<App />)
