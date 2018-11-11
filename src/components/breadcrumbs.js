import React, { Fragment } from 'react'
import { Route, Link } from '@reach/router'
import styled from '@emotion/styled'

const Div = styled('div')`
  margin-bottom: 2rem;
`

const toUppercase = string => string.charAt(0).toUpperCase() + string.slice(1)

const buildPath = (currentIndex, arr) => arr.slice(0, currentIndex)

const Breadcrumbs = ({ location }) =>
  location.pathname
    .split('/')
    .filter(Boolean)
    .reduce(
      (acc, item, ndx, arr) => [
        ...acc,
        <Link
          key={buildPath(ndx + 1, arr).join('/')}
          to={`/${buildPath(ndx + 1, arr).join('/')}`}
        >
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
    <Location>{({ location }) => <Breadcrumbs location={location} />}</Location>
  </Div>
)

export default WrappedBreadcrumbs
