import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@atlaskit/avatar'
import { MatchMedia } from '../utils/media.js'
import { css } from 'react-emotion'
import { colors } from '../styles/index.js'
import me from './me.jpg'

const subnav = css`
  text-align: center;
  & a {
    color: ${colors.accent};
    font-size: 2rem;
  }
  & a + a {
    margin-left: 1rem;
  }
`

const headerlink = css`
  text-decoration: none;
  &:hover,
  &:focus {
    border: none;
  }
`

const nav = css`
  text-align: center;
  margin: 1rem 0;
`

export default () => (
  <nav className={nav}>
    <Link to="/" className={headerlink}>
      <MatchMedia
        render={matches => (
          <Avatar
            src={me}
            size={matches ? 'xlarge' : 'xxlarge'}
            presence={matches ? 'online' : null}
          />
        )}
      />
    </Link>
    <div className={subnav}>
      <Link to="/blog">Blog</Link>
      <Link to="/projects">Projects</Link>
    </div>
  </nav>
)
