import React from 'react'
import { Link } from 'react-router-dom'
// import Avatar from '@atlaskit/avatar';
import { css } from 'react-emotion'
import colors from '../utils/colors'
import { large } from '../utils/media'

const df = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & div:first-child {
    display: none;
  }
  ${large`
    text-align: left;
    justify-content: initial;
    & div:first-child {
      display: initial;
    }
  `};
`

const title = css`
  display: inline-block;
  ${large`
    margin-left: 2rem;
  `};
`

const subtitle = css`
  &,
  & > a {
    color: ${colors.accent};
  }
  display: inline-block;
  & + & {
    margin-left: 1rem;
  }
  &:last-of-type {
    margin-right: 1rem;
  }
`

const subnav = css`
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    font-size: 2rem;
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
  display: flex;
  flex-direction: column;
  text-align: center;
  ${large`
    text-align: left;
    justify-content: space-between;
    align-items: center;
  `};
`

export default () => (
  <nav className={nav}>
    <div className={df}>
      <Link to="/" className={headerlink}>
        <h1 className={title}>Matt Hamlin</h1>
      </Link>
    </div>
    <div className={subnav}>
      <h4 className={subtitle}>
        <Link to="/blog">Blog</Link>
      </h4>
      <h4 className={subtitle}>
        <Link to="/projects">Projects</Link>
      </h4>
    </div>
  </nav>
)
