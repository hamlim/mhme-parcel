import React, { Fragment } from 'react'
import { Match, Link } from '@reach/router'

export default function BlogListing({ routes, path, title }) {
  return (
    <Fragment>
      <Match
        path={path}
        children={r =>
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
      {routes.map(({ route, component: Comp }) => (
        <Comp key={route} path={route} />
      ))}
    </Fragment>
  )
}
