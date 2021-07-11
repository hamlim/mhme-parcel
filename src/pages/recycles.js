import React, { Fragment } from 'react'
import Container from '../components/container.js'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { Flex, Box } from 'grid-emotion'
import hljs from 'highlight.js'
import Code from '../components/code.js'

import { ComponentDidMount, ComponentWillUnmount } from 'recycles'

const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const P = styled('p')`
  margin: 1rem 0;
`
const Main = styled('main')`
  font-size: 1.3rem;
  margin-bottom: 3rem;
`

class Toggle extends React.Component {
  state = {
    on: false,
  }
  toggle = () => this.setState(({ on }) => ({ on: !on }))
  render() {
    return (
      <Fragment>
        <button onClick={this.toggle}>
          {this.state.on ? 'Unmount' : 'Mount'}
        </button>
        {this.state.on ? this.props.children : null}
      </Fragment>
    )
  }
}

export default () => (
  <Container>
    <Main>
      <header>
        <h2>
          <code>Recycles</code>
        </h2>
      </header>
      <section>
        <P>
          Recycles is a collection of render-prop components that expose hooks
          into the component lifecycle methods of a React Component.
        </P>
        <P>The following components are exported:</P>
        <ul>
          <li>
            <code>ComponentDidMount</code>
          </li>
          <li>
            <code>ComponentDidUpdate</code>
          </li>
          <li>
            <code>ComponentDidCatch</code>
            <sup>*</sup>
          </li>
          <li>
            <code>ComponentWillUnmount</code>
          </li>
        </ul>
        <P>
          Below is a simple toggle component which will toggle
          mounting/unmounting a component. The first example is using a{' '}
          <code>{`<ComponentDidMount>`}</code> component. Check the console in
          your browser to see logging that happens during mount.
        </P>
        <Toggle>
          <ComponentDidMount
            callback={() => {
              console.log('Mounted!')
            }}
          >
            {() => <marquee>I have mounted!</marquee>}
          </ComponentDidMount>
        </Toggle>
        <P>
          The next example is using the <code>{`<ComponentWillUnmount>`}</code>{' '}
          component.
        </P>
        <Toggle>
          <ComponentWillUnmount
            callback={() => {
              console.log('I have unmounted!')
            }}
          >
            {() => <div>I will log a message when I unmount!</div>}
          </ComponentWillUnmount>
        </Toggle>
      </section>
      <section>
        <P>
          By default these components only expose two props, the first of which
          is <code>children</code>, which is a function called during the
          lifecycle. If you only provide <code>children</code> then the
          compoennt will return null.
        </P>
        <P>
          If you do want to have the component render something and also use the
          lifecycle, then you can provide a <code>callback</code> prop. When
          this is provided only the callback will be called during the lifecycle
          method, and then in render the component will return the result of
          evaluating children.
        </P>
        <P>
          <code>{`<ComponentDidCatch>`}</code> is a special case component
          because of its behavior with catching errors. If you are looking for a
          generic error boundary component that can handle the logging inside
          the callback for you, check out{' '}
          <a href="https://github.com/hamlim/react-error-boundary">
            React-Error-Boundary
          </a>
          . If you would just like to use the component from recycles, then you
          should always provide a callback and a children prop. This is because
          the <code>componentDidCatch</code> lifecycle will only be invoked when
          the components children throw and error, not the components siblings.
        </P>
        <P>
          Check out the rest of the library on github{' '}
          <a href="https://github.com/hamlim/recycles">here</a>
        </P>
      </section>
    </Main>
  </Container>
)
