import React from 'react'

import BlogListing from '../../../../components/blog-listing'
import Ai from './ai.mdx'
import Sixteen from './sixteen.mdx'
import Seventeen from './seventeen.mdx'
// import Eighteen from './eighteen.mdx'
import Nineteen from './nineteen.mdx'
import Twenty from './twenty.mdx'
import TwentyOne from './twenty-one.mdx'
import TwentyTwo from './twenty-two.mdx'
import TwentyThree from './twenty-three.mdx'
import TwentyFour from './twenty-four.mdx'
import TwentyFive from './twenty-five.mdx'
import TwentyEight from './twenty-eight.mdx'
import TwentySeven from './twenty-seven.mdx'

const local = '/blog/2017/January'

const withLocal = r => `${r}/*`

const Janurary2017 = () => (
  <BlogListing
    title={<h3>January - 2017</h3>}
    path={local}
    routes={[
      {
        name: 'AI',
        route: 'ai',
      },
      {
        name: 'Sixteen',
        route: `sixteen`,
      },
      {
        name: 'Seventeen',
        route: `seventeen`,
      },
      {
        name: 'Eighteen',
        route: `eighteen`,
      },
      {
        name: 'Nineteen',
        route: `nineteen`,
      },
      {
        name: 'Twenty',
        route: 'twenty',
      },
      {
        name: 'Twenty One',
        route: `twenty-one`,
      },
      {
        name: 'Twenty Two',
        route: `twenty-two`,
      },
      {
        name: 'Twenty Three',
        route: `twenty-three`,
      },
      {
        name: 'Twenty Four',
        route: `twenty-four`,
      },
      {
        name: 'Twenty Five',
        route: `twenty-five`,
      },
      {
        name: 'Twenty Seven',
        route: `twenty-seven`,
      },
      {
        name: 'Twenty Eight',
        route: `twenty-eight`,
      },
    ]}
  >
    <Ai path={withLocal('ai')} />
    <Sixteen path={withLocal(`sixteen`)} />
    <Seventeen path={withLocal(`seventeen`)} />
    <Eighteen path={withLocal(`eighteen`)} />
    <Nineteen path={withLocal(`nineteen`)} />
    <Twenty path={withLocal('twenty')} />
    <TwentyOne path={withLocal(`twenty-one`)} />
    <TwentyTwo path={withLocal(`twenty-two`)} />
    <TwentyThree path={withLocal(`twenty-three`)} />
    <TwentyFour path={withLocal(`twenty-four`)} />
    <TwentyFive path={withLocal(`twenty-five`)} />
    <TwentySeven path={withLocal(`twenty-seven`)} />
    <TwentyEight path={withLocal(`twenty-eight`)} />
  </BlogListing>
)

export default Janurary2017
