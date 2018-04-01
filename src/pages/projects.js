import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'react-emotion'
import Container from '../components/container.js'
import { colors } from '../styles/index.js'

const Title = styled('h3')`
  font-size: 3rem;
  text-align: center;
`
const StyledLink = styled('a')`
  color: ${colors.base};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${colors.base};
  }
`

const NavLink = styled(Link)`
  color: ${colors.base};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${colors.base};
  }
`

const Description = styled('p')`
  font-size: 1.2rem;
`

const Project = styled('li')`
  margin: 1em;
  border: solid 4px ${colors.base};
  border-radius: 1em;
  padding: 1rem;
  & h4 {
    margin: 0;
  }
`

const Projects = () => (
  <Container>
    <Title>My Projects</Title>
    <ul
      className={css`
        list-style: none;
      `}
    >
      <Project>
        <h4>
          <StyledLink href="https://github.com/hamlim/recycles">
            Recycles ♻️
          </StyledLink>{' '}
          - 2018
        </h4>
        <Description>
          A collection of React component lifecycle
          render-prop components.
        </Description>
      </Project>
      <Project>
        <h4>
          <NavLink to="./react-state-reducer">
            react-state-reducer
          </NavLink>{' '}
          - 2018
        </h4>
        <Description>
          A redux-like state management library using{' '}
          <code>setState</code> and{' '}
          <code>createContext</code>.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="https://github.com/hamlim/postcss-plugin-initial">
            postcss-plugin-initial
          </StyledLink>{' '}
          - 2018
        </h4>
        <Description>
          A postcss plugin to polyfill the{' '}
          <code>initial</code> declaration value.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="https://github.com/hamlim/app-config">
            appconfig
          </StyledLink>{' '}
          - 2018
        </h4>
        <Description>
          A universal config file format for web
          applications.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="https://github.com/hamlim/resp">
            resp
          </StyledLink>{' '}
          - 2018
        </h4>
        <Description>
          A simple css-in-js responsive utility package.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="https://github.com/hamlim/ds">
            DS
          </StyledLink>{' '}
          - 2018
        </h4>
        <Description>
          Extremely work in progress project to develop a
          single source of truth for design systems.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="https://htmlcolors.now.sh/">
            HTML Colors
          </StyledLink>
        </h4>
        <Description>
          A list of all the HTML named colors, with links
          for generating a color palette.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="http://matthamlin.me/bookmarkbot">
            Bookmark Bot
          </StyledLink>
        </h4>
        <Description>
          A quick and dirty way to save tweets for later by
          DMing links to a Twitter account.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="http://bombsweeper.now.sh/">
            Bombsweeper
          </StyledLink>
        </h4>
        <Description>
          A quick and dirty React re-creation of the classic
          Minesweeper game. Built this in a few hours to see
          how difficult it would be to implement. Turns out
          its not too difficult.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="https://todometer-web.xyz/">
            Todometer Web
          </StyledLink>
        </h4>
        <Description>
          I found this really awesome open source
          electron-based todo app called Todometer (<StyledLink href="https://cassidoo.github.io/todometer/">
            link here
          </StyledLink>) and decided to try and recreate its
          entire functionality on the web using Next.js and
          other bits and piece of React.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="/">MattHamlin.me</StyledLink>
        </h4>
        <Description>
          This website is one of the largest time sinks for
          me. I consistently spend time testing out other
          techniques, tools, and technologies on this. Over
          the past two months I have dropped all work on
          anything else (outside of my actual job of course)
          to revamp this website.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="https://goexploring.today/Future-Grid/">
            Future-Grid
          </StyledLink>
        </h4>
        <Description>
          Future-Grid is a complete forward facing css grid
          system. It is built to support IE8 and up, and
          uses flexbox, and is also the first and only CSS
          Grid grid framework. I built this in the span of a
          short weekend as a test for myself and also as a
          way to learn more about CSS Grid.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="https://goexploring.today">
            Goexploring.today
          </StyledLink>
        </h4>
        <Description>
          Goexploring.today is like my garage, its where I
          store all my side projects that I have worked on,
          I am in the process of moving some of the projects
          into their own domains but for now they all live
          on that domain.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="https://goexploring.today/colors">
            Colors
          </StyledLink>
        </h4>
        <Description>
          Colors was one of my first React projects, and it
          stands as one of my few projects that uses
          technology that only really evergreen browsers
          support (right now the bleeding edge of the
          project is the <code>fetch</code> api.)
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="https://goexploring.today/Dollar">
            Dollar
          </StyledLink>
        </h4>
        <Description>
          Dollar was one of my first full on projects. And
          to this date I still consider it as one of the
          most ambitious projects I have worked on by
          myself. It involved a lot of crappy JS when I
          first made it but I am working on refactoring it
          to use react and redux. I think at the moment of
          writing this it is extremely broken, but I plan on
          getting back to it after I polish off the rest of
          this website.
        </Description>
      </Project>
      <Project>
        <h4>
          <StyledLink href="https://goexploring.today/bundles">
            Bundles
          </StyledLink>
        </h4>
        <Description>
          Bundles was I believe the first project that I
          worked on full time, I think Dollar superseeds it
          in a few places mainly because Dollar was more a
          fully functioning webapp. Bundles still works to
          this date, however it never really got to a place
          where I was comfortable with it. I ended up
          spending more and more time building out Dollar
          over Bundles.
        </Description>
      </Project>
    </ul>
  </Container>
)
export default Projects
