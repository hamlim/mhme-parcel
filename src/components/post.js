import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Markdown from 'markdown-to-jsx'
import markdownConfig from '../utils/markedConfig.js'

import { medium, large } from '../utils/media.js'

import { widths } from '../styles/index.js'

const Article = styled('article')`
  max-width: 95vw;
  margin: 0 2.5vw 2rem;
  font-size: 1.2rem;
  ${medium`
    max-width: ${widths.maxWidth};
    margin: 0 auto 2rem;
  `};

  ol,
  ul {
    list-style-position: inside;
    margin: 0.5rem 0;
  }

  p + p {
    margin-top: 1rem;
  }
`

class Post extends Component {
  static childContextTypes = {
    registerYaml: PropTypes.func.isRequired,
  }

  state = {
    title: null,
    tags: [],
    date: null,
  }

  registerYaml = ({ title, date, tags }) => {
    this.setState({ title, tags, date })
  }

  getChildContext() {
    return {
      registerYaml: this.registerYaml,
    }
  }

  render() {
    console.log(this.state)
    return (
      <Article>
        <Markdown children={this.props.source} options={markdownConfig} />
      </Article>
    )
  }
}

export default Post
