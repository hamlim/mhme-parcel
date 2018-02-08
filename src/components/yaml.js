import React from 'react'

import { Consumer } from '../utils/post-context.js'

const enhance = Comp => props => <Consumer children={ctx => <Comp {...props} {...ctx} />} />

class Yaml extends React.Component {
  constructor(props) {
    super(props)

    const { title, date } = props

    props.setData({
      title,
      date,
    })
  }

  render() {
    return null
  }
}

export default enhance(Yaml)
