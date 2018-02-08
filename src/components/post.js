import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Markdown from 'markdown-to-jsx'
import markdownConfig from '../utils/markedConfig.js'
import format from 'date-fns/format'
import { medium, large } from '../utils/media.js'

import { widths } from '../styles/index.js'

import { Provider, Consumer } from '../utils/post-context.js'

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

const Div = styled('div')`
  margin: 1rem 0;
`

const dateFormat = 'dddd MMMM YYYY'

const transform = ({ date, title }) => {
  return {
    date: format(new Date(date) || new Date(), dateFormat),
    title,
  }
}

class Post extends Component {
  state = {
    title: null,
    date: format(new Date(), dateFormat),
  }

  updateData = data => {
    this.setState({
      ...transform(data),
    })
  }

  render() {
    return (
      <Provider
        value={{
          data: this.state.data,
          setData: this.updateData,
          getData: () => this.state.data,
        }}
      >
        <Article>
          {this.state.title && <h2>{this.state.title}</h2>}
          <Div>
            {this.state.date && (
              <Fragment>
                Published: <time>{this.state.date + ''}</time>
              </Fragment>
            )}
          </Div>
          <Markdown children={this.props.source} options={markdownConfig} />
        </Article>
      </Provider>
    )
  }
}

export default Post
