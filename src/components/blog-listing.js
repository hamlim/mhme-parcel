import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

export default function BlogListing({ routes, path, title }) {
  return (
    <Fragment>
      <Route
        exact
        path={path}
        render={r =>
          r.match && (
            <Fragment>
              {title}
              <ul>
                {routes.map(({ route, name }) => (
                  <li key={name}>
                    <Link to={route}>{name}</Link>
                  </li>
                ))}
              </ul>
            </Fragment>
          )
        }
      />
      {routes.map(({ route, component }) => (
        <Route key={route} path={route} component={component} />
      ))}
    </Fragment>
  )
}
