import React, { Fragment } from 'react'
import { Match, Link, Router } from '@reach/router'

export default function BlogListing(props) {
  const { routes, path, basePath, title, children } = props
  return (
    <>
      <Match
        path={basePath || path}
        children={r =>
          r.match && (
            <>
              {title}
              <nav>
                <ul>
                  {routes.map(({ route, name }) => (
                    <li key={name}>
                      <Link to={route}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )
        }
      />
      {children ? (
        <Router primary={false}>{children}</Router>
      ) : (
        routes.map(({ route, name, component: Comp }) => (
          <Comp key={name} path={route} />
        ))
      )}
    </>
  )
}
