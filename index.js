import React from 'react'
import { render } from 'react-dom'

import Test from './src/test.re'

console.log(Test)

const Greeting = Test.greeting

const App = () => (
  <h1>
    <Greeting name="world" />
  </h1>
)

const elem = document.querySelector('#root')

render(<App />, elem)
