import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

export default ({ routes, path, title }) => (
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
    {routes.map(({ link, component }) => <Route key={link} path={link} component={component} />)}
  </Fragment>
)
