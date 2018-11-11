/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'
import { MatchMedia } from '../utils/media.js'
import styled from '@emotion/styled'
import { colors } from '../styles/index.js'
import me from './me.jpg'

const Avatar = styled('img')`
  border-radius: 50%;
  overflow: hidden;
  height: 96px;
  width: 96px;
`

export default function Navigation() {
  return (
    <nav
      css={css`
        text-align: center;
        margin: 1rem 0;
      `}
    >
      <Link
        to="/"
        css={css`
          text-decoration: none;
          &:hover,
          &:focus {
            border: none;
          }
        `}
      >
        <MatchMedia>{matches => <Avatar src={me} />}</MatchMedia>
      </Link>
      <div
        css={css`
          text-align: center;
          & a {
            color: ${colors.accent};
            font-size: 2rem;
          }
          & a + a {
            margin-left: 1rem;
          }
        `}
      >
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}
