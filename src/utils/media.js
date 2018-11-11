import React from 'react'
import resp from '@matthamlin/resp'

const sizes = {
  small: 640,
  medium: 832,
  large: 1024,
}

const { small, medium, large } = resp(sizes)

export { small, medium, large }

export class MatchMedia extends React.Component {
  state = {
    matches: false,
  }
  mql = null
  componentDidMount() {
    this.mql = window.matchMedia(
      this.props.mediaQuery || 'screen and (min-width: 640px)',
    )
    this.mql.addListener(this.onMatch)
    this.onMatch(this.mql)
  }

  onMatch = mql => {
    const matches = !!mql.matches
    this.setState({ matches })
  }

  render() {
    return this.props.children(this.state.matches)
  }
}
