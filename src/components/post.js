import React, { Component, Fragment } from 'react'
import styled, { injectGlobal } from 'react-emotion'
import format from 'date-fns/format'
import { medium, large } from '../utils/media.js'
import { colors } from '../styles/index.js'
import { widths } from '../styles/index.js'

import hljs from 'highlight.js'

import marked from 'marked'

injectGlobal`
  .hljs pre code {
    font-size: 0.8rem;
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #282b2e;
    & > * {
      font-family: 'Fira Code';
    }
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
  .hljs pre code {
    color: #e0e2e4;
    background: #282b2e;
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

  p,
  pre {
    margin-bottom: 2rem;
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

    if (this.props.source) {
      fetch(this.props.source)
        .then(resp => resp.text())
        .then(md => {
          this.setState({
            source: marked(md, {
              highlight(code) {
                return hljs.highlight('javascript', code)
                  .value
              },
            }),
          })
        })
    }
  }

  render() {
    return (
      <Article>
        {this.state.title && <h2>{this.state.title}</h2>}
        <Div>
          {this.state.date && (
            <Fragment>
              Published: <time>{this.state.date + ''}</time>
            </Fragment>
          )}
        </Div>
        <div
          className="hljs"
          dangerouslySetInnerHTML={{
            __html: this.state.source,
          }}
        />
      </Article>
    )
  }
}

export default Post
