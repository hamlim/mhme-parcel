import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/container.js'
import styled, { css } from 'react-emotion'
import { colors } from '../styles/index.js'

const list = css`
  list-style: none;
`
const link = css`
  color: ${colors.primary};
`

const fadedLink = css`
  color: ${colors.base};
  & span {
    text-decoration: underline;
  }
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${colors.secondaryLight};
  }
  & p {
    color: ${colors.base};
    text-decoration: none;
    border-bottom: 0;
    padding: 0.5rem;
  }
`

const listItem = css`
  & + & {
    margin-top: 2rem;
  }
`

const spaced = css`
  margin-top: 2rem;
`

const p = css`
  margin: 0.5rem 0;
`

const toPost = l => `/blog/${l}`

const posts = [
  {
    name: "You've Launched, Now What?",
    route: toPost(`2018/September/youve-launched-now-what`),
  },
  {
    name: '☀️ Summer 2018 Trip ☀️',
    route: toPost(`2018/July/☀️`),
  },
  {
    name: 'Taking a Break',
    route: toPost(`2018/July/taking-a-break`),
  },
  {
    name: 'Understanding React 16.3 Updates',
    route: toPost(`2018/April/understanding-react-16-3-updates`),
  },
  {
    name: '2018',
    route: toPost(`2018/January/2018`),
  },
  {
    name: 'Links',
    route: toPost(`2016/November/links`),
  },
]

const spacing = css`
  margin: 3rem 0;
`

const Main = styled('main')`
  font-size: 1.8rem;
  margin-bottom: 3rem;
`

export default () => (
  <Main>
    <Container>
      <section>
        <h2 className={`mv4 ${spacing}`}>
          Hello 👋🏼
          <br />I am Matt Hamlin, a web developer.
        </h2>
        <p className={[p, spacing].join(' ')}>
          I make small <Link to="/projects">side projects</Link> of all kinds in
          my free time, and work with some really smart people at Wayfair
          currently.
        </p>
      </section>
      <h2>Recent and Popular blog posts:</h2>
      <ul>
        {posts.map(({ route, name }) => (
          <li key={name}>
            <Link className={link} to={route}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Other Links:</h2>
      <ul>
        <li>
          <Link className={link} to="/react-state-reducer">
            React State Reducer
          </Link>
        </li>
      </ul>
      <div className={spacing}>
        <h2>Follow me on some social sites:</h2>
        <ul className={list}>
          <li>
            <a className={link} href="https://twitter.com/immatthamlin">
              Follow me on Twitter
            </a>
          </li>
          <li>
            <a className={link} href="https://github.com/hamlim">
              Check out my work on Github
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </Main>
)

/* <video
    style={{
      width: '100%',
      marginTop: '2rem',
    }}
    src="./drone-footage-from-carpenter-point.mp4"
    controls
  /> */
