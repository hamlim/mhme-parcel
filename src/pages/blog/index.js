import React, { Fragment, Component, lazy } from 'react'
import { Link, Match, Router } from '@reach/router'
import Container from '../../components/container.js'

const Breadcrumbs = lazy(() => import('../../components/breadcrumbs.js'))
const TwentyFifteen = lazy(() => import('./2015/index.js'))
const TwentySixteen = lazy(() => import('./2016/index.js'))
const TwentySeventeen = lazy(() => import('./2017/index.js'))
const TwentyEighteen = lazy(() => import('./2018/index.js'))

export default function Blog() {
  return (
    <Container>
      <Breadcrumbs />
      <Router primary={false}>
        <TwentyFifteen path="/2015/*" />
        <TwentySixteen path="/2016/*" />
        <TwentySeventeen path="/2017/*" />
        <TwentyEighteen path="/2018/*" />
      </Router>
      <Match path="/blog">
        {r =>
          r.match && (
            <>
              <h3>Years:</h3>
              <nav>
                <ul>
                  <li>
                    <Link to="/blog/2015">2015</Link>
                  </li>
                  <li>
                    <Link to="/blog/2016">2016</Link>
                  </li>
                  <li>
                    <Link to="/blog/2017">2017</Link>
                  </li>
                  <li>
                    <Link to="/blog/2018">2018</Link>
                  </li>
                </ul>
              </nav>
            </>
          )
        }
      </Match>
    </Container>
  )
}
