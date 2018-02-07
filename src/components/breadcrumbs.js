import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'react-emotion'

const Div = styled('div')`
  margin-bottom: 2rem;
`

const toUppercase = string => string.charAt(0).toUpperCase() + string.slice(1)

const buildPath = (currentIndex, arr) => arr.slice(0, currentIndex)

const Breadcrumbs = ({ routeProps }) =>
  routeProps.location.pathname
    .split('/')
    .filter(Boolean)
    .reduce(
      (acc, item, ndx, arr) => [
        ...acc,
        <Link key={buildPath(ndx + 1, arr).join('/')} to={`/${buildPath(ndx + 1, arr).join('/')}`}>
          {toUppercase(item)}
        </Link>,
      ],
      [],
    )
    .reduce((links, link, ndx, arr) => {
      if (ndx === arr.length - 1) {
        return [...links, <Fragment key={ndx}> {link}</Fragment>]
      } else if (ndx === 0) {
        return [...links, <Fragment key={ndx}>{link} /</Fragment>]
      } else {
        return [...links, <Fragment key={ndx}> {link} /</Fragment>]
      }
    }, [])

const WrappedBreadcrumbs = () => (
  <Div>
    <Route path="" render={r => <Breadcrumbs routeProps={r} />} />
  </Div>
)

export default WrappedBreadcrumbs
