/** @jsx jsx */
import { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Global } from '@emotion/core'
import format from 'date-fns/format'
import { medium, large } from '../utils/media.js'
import { colors, widths } from '../styles/index.js'
import { MDXProvider } from '@mdx-js/tag'

import hljs from 'highlight.js'

const components = {
  pre: p => <pre className="hljs" {...p} />,
}

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
    margin: 0.5rem 0 2rem;
  }

  p,
  pre,
  img {
    margin-bottom: 2rem;
  }

  blockquote {
    border-left: solid 5px ${colors.secondary};
    padding-left: 0.5rem;
  }
`

const Div = styled('div')`
  margin: 1rem 0;
`

const dateFormat = 'dddd Do MMMM YYYY'

const transform = ({ date, title }) => {
  return {
    date: format(new Date(date) || new Date(), dateFormat),
    title,
  }
}

class Post extends Component {
  componentDidMount() {
    const link = document.createElement('link')
    link.href =
      'https://cdn.rawgit.com/tonsky/FiraCode/1.204/distr/fira_code.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }

  render() {
    return (
      <Fragment>
        <Global
          styles={css`
            pre.hljs code {
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
            pre.hljs code {
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

            li > p {
              display: inline-block;
            }
          `}
        />
        <Article className="hljs">
          <Div>
            {this.props.date && (
              <Fragment>
                Published: <time>{format(this.props.date, dateFormat)}</time>
              </Fragment>
            )}
          </Div>
          <MDXProvider components={components}>
            {this.props.children}
          </MDXProvider>
        </Article>
      </Fragment>
    )
  }
}

export default Post
