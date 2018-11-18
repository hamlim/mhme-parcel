import React from 'react'
import normalize from 'normalize.css'
import { Global, css } from '@emotion/core'
import { colors } from './styles/index.js'
export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          font-size: 18px;
        }
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir,
            'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
            sans-serif;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        code {
          font-family: 'Fira Code', monospace;
        }
        a {
          text-decoration: none;
          cursor: pointer;
          color: ${colors.primraryLight};
          border-bottom: solid 2px transparent;
          &:hover,
          &:focus,
          &:active {
            border-bottom: solid 2px ${colors.accent};
          }
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          padding: 0.5em 0;
          color: ${colors.base};
        }
        p {
          color: ${colors.base};
        }
        [data-css-video],
        [data-css-youtube] {
          width: 100%;
          padding-bottom: 22%;
          min-height: 400px;
        }
        .fade-enter {
          opacity: 0;
          z-index: 1;
        }

        .fade-enter.fade-enter-active {
          opacity: 1;
          transition: opacity 250ms ease-in;
        }
        .fade-exit {
          opacity: 0;
        }
      `}
    />
  )
}
