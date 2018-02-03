import React from 'react'

import PropTypes from 'prop-types'

class Yaml extends React.Component {
  static contextTypes = {
    registerYaml: PropTypes.func.isRequired,
  }
  constructor(props, context) {
    super(props, context)

    const { title, date, tags } = props

    context.registerYaml({
      title,
      date,
      tags,
    })
  }

  render() {
    return null
  }
}

export default Yaml
