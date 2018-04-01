import React, { Fragment } from 'react'
import Container from '../components/container.js'
import createStore from 'react-state-reducer'
import styled from 'react-emotion'
import { Flex, Box } from 'grid-styled'
import hljs from 'highlight.js'

const P = styled('p')`
  margin: 1rem 0;
`
const Main = styled('main')`
  font-size: 1.3rem;
  margin-bottom: 3rem;
`

const Code = styled('pre')`
  .hljs code {
    font-size: 0.8rem;
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #282b2e;
  }
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-selector-id {
    color: #93c763;
  }
  .hljs-number {
    color: #ffcd22;
  }
  .hljs code {
    color: #e0e2e4;
  }
  .hljs-attribute {
    color: #668bb0;
  }
  .hljs-code,
  .hljs-class .hljs-title,
  .hljs-section {
    color: white;
  }
  .hljs-regexp,
  .hljs-link {
    color: #d39745;
  }
  .hljs-meta {
    color: #557182;
  }
  .hljs-tag,
  .hljs-name,
  .hljs-bullet,
  .hljs-subst,
  .hljs-emphasis,
  .hljs-type,
  .hljs-built_in,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-addition,
  .hljs-variable,
  .hljs-template-tag,
  .hljs-template-variable {
    color: #8cbbad;
  }
  .hljs-string,
  .hljs-symbol {
    color: #ec7600;
  }
  .hljs-comment,
  .hljs-quote,
  .hljs-deletion {
    color: #818e96;
  }
  .hljs-selector-class {
    color: #a082bd;
  }
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-doctag,
  .hljs-title,
  .hljs-section,
  .hljs-type,
  .hljs-name,
  .hljs-strong {
    font-weight: bold;
  }
`

import Button from '@atlaskit/button'

const INITIAL_STATE = {
  todos: [],
  text: '',
  counter: 0,
}

const INC = 'INC'
const DEC = 'DEC'
const ADD_TODO = 'ADD_TODO'
const UPDATE_INPUT = 'UPDATE_INPUT'
const UPDATE_TODO = 'UPDATE_TODO'

const SET = 'SET'

const reducer = ({ type, payload }) => (
  state = INITIAL_STATE,
) => {
  switch (type) {
    case SET: {
      return {
        ...state,
        ...payload,
      }
    }
    case INC: {
      return {
        ...state,
        counter: state.counter + 1,
      }
    }
    case DEC: {
      return {
        ...state,
        counter: state.counter - 1,
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        text: '',
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: state.text,
            done: false,
          },
        ],
      }
    }
    case UPDATE_INPUT: {
      return {
        ...state,
        text: payload,
      }
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id === payload) {
            return {
              ...t,
              done: !t.done,
            }
          } else {
            return t
          }
        }),
      }
    }
    default:
      return state
  }
}

const { Provider, Consumer } = createStore(reducer)

class ComponentDidMount extends React.Component {
  componentDidMount() {
    this.props.children()
  }
  render() {
    return null
  }
}

const LOCAL = 'MH-RSR'

const UpdateState = () => (
  <Consumer>
    {({ dispatch }) => (
      <ComponentDidMount>
        {() => {
          let synced = window.localStorage.getItem(LOCAL)
          if (synced) {
            dispatch({
              type: SET,
              payload: JSON.parse(synced),
            })
          }
        }}
      </ComponentDidMount>
    )}
  </Consumer>
)

export default () => (
  <Provider
    onUpdate={state => {
      window.localStorage.setItem(
        LOCAL,
        JSON.stringify(state),
      )
    }}
  >
    <Container>
      <UpdateState />
      <Main>
        <header>
          <h2>
            <code>React-State-Reducer</code>
          </h2>
        </header>
        <section>
          <P>
            This is{' '}
            <a href="https://github.com/hamlim/react-state-reducer">
              React-State-Reducer
            </a>
            , a simple React library for state management,
            built on the same patterns that Redux and other
            Flux libraries pioneered.
          </P>
          <div>
            <Consumer>
              {({ dispatch, counter }) => (
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  mt="2rem"
                >
                  <Flex
                    w={1 / 3}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Button
                      appearance="primary"
                      onClick={_ => dispatch({ type: INC })}
                    >
                      Increment
                    </Button>
                  </Flex>
                  <Flex
                    w={1 / 3}
                    alignItems="center"
                    justifyContent="center"
                  >
                    {counter}
                  </Flex>
                  <Flex
                    w={1 / 3}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Button
                      appearance="primary"
                      onClick={_ => dispatch({ type: DEC })}
                    >
                      Decrement
                    </Button>
                  </Flex>
                </Flex>
              )}
            </Consumer>
          </div>
          <div>
            <P>
              It allows you to manage how you both update
              and reconcile state changes by providing{' '}
              <code>{`<Provider>`}</code> and{' '}
              <code>{`<Consumer>`}</code> components. The
              consumer component provides a{' '}
              <code>dispatch</code> function, along with all
              of the state spread down to the argument for
              the children function.
            </P>
          </div>
          <div>
            <Consumer>
              {({ dispatch, todos, text }) => (
                <Fragment>
                  <label>
                    Add a todo:
                    <input
                      value={text}
                      onChange={e =>
                        dispatch({
                          type: UPDATE_INPUT,
                          payload: e.target.value,
                        })
                      }
                      onKeyDown={e => {
                        if (e.key === 'Enter') {
                          dispatch({ type: ADD_TODO })
                        }
                      }}
                      placeholder="Do the dishes"
                    />
                  </label>
                  <ul>
                    {todos.map(todo => (
                      <li key={todo.id}>
                        {todo.done ? (
                          <s>{todo.text}</s>
                        ) : (
                          todo.text
                        )}
                        <Button
                          appearance="link"
                          onClick={_ =>
                            dispatch({
                              type: UPDATE_TODO,
                              payload: todo.id,
                            })
                          }
                        >
                          Mark as{' '}
                          {todo.done
                            ? 'incomplete'
                            : 'complete'}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              )}
            </Consumer>
            <P>
              In fact this page is using the library to
              power not only the counter but also the todo
              application above!
            </P>
            <P>
              And the best part of this is that they are
              using the same top level Provider, and two
              different Consumers!
            </P>
            <Button
              appearance="primary"
              onClick={_ => {
                let synced = window.localStorage.getItem(
                  LOCAL,
                )
                if (synced) {
                  window.localStorage.setItem(LOCAL, '')
                }
              }}
            >
              Clear out local storage
            </Button>
            <details>
              <summary>
                Here is the code for this entire webpage:
              </summary>
              <div className="hljs">
                <Code
                  style={{
                    maxWidth: '100%',
                    overflow: 'scroll',
                  }}
                >
                  <code
                    dangerouslySetInnerHTML={{
                      __html: hljs.highlight(
                        'jsx',
                        `import React, { Fragment } from 'react'
import createStore from 'react-state-reducer'

const INITIAL_STATE = {
  todos: [],
  text: '',
  counter: 0,
}

const INC = 'INC'
const DEC = 'DEC'
const ADD_TODO = 'ADD_TODO'
const UPDATE_INPUT = 'UPDATE_INPUT'
const UPDATE_TODO = 'UPDATE_TODO'

const reducer = ({ type, payload }) => (
  state = INITIAL_STATE,
) => {
  switch (type) {
    case INC: {
      return {
        ...state,
        counter: state.counter + 1,
      }
    }
    case DEC: {
      return {
        ...state,
        counter: state.counter - 1,
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        text: '',
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: state.text,
            done: false,
          },
        ],
      }
    }
    case UPDATE_INPUT: {
      return {
        ...state,
        text: payload,
      }
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id === payload) {
            return {
              ...t,
              done: !t.done,
            }
          } else {
            return t
          }
        }),
      }
    }
    default:
      return state
  }
}

const { Provider, Consumer } = createStore(reducer)

export default () => (
  <Provider>
    <Container>
      <Main>
        <section>
          <div>
            <Consumer>
              {({ dispatch, counter }) => (
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  mt="2rem"
                >
                  <Flex
                    w={1 / 3}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Button
                      appearance="primary"
                      onClick={_ => dispatch({ type: INC })}
                    >
                      Increment
                    </Button>
                  </Flex>
                  <Flex
                    w={1 / 3}
                    alignItems="center"
                    justifyContent="center"
                  >
                    {counter}
                  </Flex>
                  <Flex
                    w={1 / 3}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Button
                      appearance="primary"
                      onClick={_ => dispatch({ type: DEC })}
                    >
                      Decrement
                    </Button>
                  </Flex>
                </Flex>
              )}
            </Consumer>
            <Consumer>
              {({ dispatch, todos, text }) => (
                <Fragment>
                  <label>
                    Add a todo:
                    <input
                      value={text}
                      onChange={e =>
                        dispatch({
                          type: UPDATE_INPUT,
                          payload: e.target.value,
                        })
                      }
                      onKeyDown={e => {
                        if (e.key === 'Enter') {
                          dispatch({ type: ADD_TODO })
                        }
                      }}
                      placeholder="Do the dishes"
                    />
                  </label>
                  <ul>
                    {todos.map(todo => (
                      <li key={todo.id}>
                        {todo.done ? (
                          <s>{todo.text}</s>
                        ) : (
                          todo.text
                        )}
                        <Button
                          appearance="link"
                          onClick={_ =>
                            dispatch({
                              type: UPDATE_TODO,
                              payload: todo.id,
                            })
                          }
                        >
                          Mark as{' '}
                          {todo.done
                            ? 'incomplete'
                            : 'complete'}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              )}
            </Consumer>
          </div>
        </section>
      </Main>
    </Container>
  </Provider>
)
`,
                      ).value,
                    }}
                  />
                </Code>
              </div>
            </details>
          </div>
          <P>
            If you made it this far down, check out the
            project on{' '}
            <a href="https://github.com/hamlim/react-state-reducer">
              Github
            </a>.
          </P>
        </section>
      </Main>
    </Container>
  </Provider>
)
