import React, { Fragment } from 'react'
import { render } from 'react-dom'

import { greeting as Greeting } from './src/test.re'
import { example as Example } from './src/example.bs'
import { todo as Todo } from './src/todo.bs'

const App = () => (
  <Fragment>
    <h1>
      <Greeting name="world" />
    </h1>
    <Example />
    <Todo />
  </Fragment>
)

const elem = document.querySelector('#root')

render(<App />, elem)
