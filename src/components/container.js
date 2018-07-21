import styled from 'react-emotion'
import { medium } from '../utils/media.js'
import { widths } from '../styles/index.js'

const Container = styled('div')`
  width: 90vw;
  max-width: 90vw;
  margin: 0 auto;
  ${medium`
    max-width: ${widths.maxWidth};
    margin: 0 auto 2rem;
  `};

  .full-bleed-img {
    max-width: 100vw;
    width: 100vw;
    margin-left: -7.5vw;
    ${medium`
      margin-left: calc((100vw - ${widths.maxWidth}) * -0.5);
    `};
  }
`

export default Container
