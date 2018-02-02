import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/container.js'
import { css } from 'react-emotion'
import colors from '../utils/colors.js'

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

export default () => (
  <main>
    <Container>
      <section>
        <h2 className="mv4">
          Hello 👋🏼.
          <br />
          I am Matt Hamlin, a web developer.
        </h2>
        <p className={p}>
          I make small <Link to="/projects">side projects</Link> of all kinds in my free time, and work with some pretty
          smart people at Wayfair currently.
        </p>
        <p className={p}>⚠️ This site is still an extreme work in progress, you have been warned. ⚠️</p>
      </section>
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
      <h2>Recent blog posts:</h2>
      {/* <ul className={[list, spaced].join(' ')}>
        {data.allMarkdownRemark.edges.slice(0, 10).map(({ node }) => (
          <li key={node.id} className={listItem}>
            <Link to={node.fields.slug} className={fadedLink}>
              <span>
                {node.frontmatter.title} - {node.frontmatter.date}
              </span>
              <p>{node.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul> */}
    </Container>
  </main>
)
