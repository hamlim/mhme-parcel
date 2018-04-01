import React, { Component, Fragment } from 'react'
import styled, { injectGlobal } from 'react-emotion'
import { Link } from 'react-router-dom'
import { Markdown } from '@compositor/markdown'
import Yaml from './yaml.js'
import format from 'date-fns/format'
import { medium, large } from '../utils/media.js'
import { colors } from '../styles/index.js'
import { widths } from '../styles/index.js'
import {
  Provider,
  Consumer,
} from '../utils/post-context.js'

const Article = styled('article')`
  max-width: 95vw;
  margin: 0 2.5vw 2rem;
  font-size: 1.2rem;
  ${medium`
    max-width: ${widths.maxWidth};
    margin: 0 auto 2rem;
  `};

  img {
    max-width: 100%;
  }

  ol,
  ul {
    list-style-position: inside;
    margin: 0.5rem 0;
  }

  p + p {
    margin-top: 1rem;
  }

  code {
    background-color: ${colors.code.background};
    color: ${colors.code.color};
    font-family: 'Fira Code';
    font-size: 1rem;
  }
  pre > code {
    overflow: scroll;
    margin: 2rem 0.5rem;
    ${medium`
      margin: 2rem -2rem;
    `};
    padding: 0.5rem;
    display: block;
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
    source: '',
    loaded: false,
    date: format(new Date(), dateFormat),
  }

  componentDidMount() {
    const link = document.createElement('link')
    link.href =
      'https://cdn.rawgit.com/tonsky/FiraCode/1.204/distr/fira_code.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    injectGlobal`
      .hljs{display:block;overflow-x:auto;padding:0.5em;color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-link{text-decoration:underline}
    `

    if (this.props.source) {
      fetch(this.props.source)
        .then(resp => resp.text())
        .then(md => {
          this.setState({ source: md })
        })
    }
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
                Published:{' '}
                <time>{this.state.date + ''}</time>
              </Fragment>
            )}
          </Div>
          <Markdown
            text={this.state.source}
            scope={{ Yaml, Link }}
          />
        </Article>
      </Provider>
    )
  }
}

export default Post
