import React from 'react'

import BlogListing from '../../../../components/blog-listing'
import Ai from './ai'
import Sixteen from './sixteen'
import Seventeen from './seventeen'
import Eighteen from './eighteen'
import Nineteen from './nineteen'
import Twenty from './twenty'
import TwentyOne from './twenty-one'
import TwentyTwo from './twenty-two'
import TwentySeven from './twenty-seven'
import TwentyFive from './twenty-five'
import TwentyFour from './twenty-four'
import TwentyThree from './twenty-three'
import TwentyEight from './twenty-eight'

const local = '/blog/2017/Janurary'

const withLocal = r => `${local}/${r}`

const Janurary2017 = () => (
  <BlogListing
    title={<h3>Janurary - 2017</h3>}
    path={local}
    routes={[
      {
        name: 'AI',
        route: withLocal('ai'),
        component: Ai,
      },
      {
        name: 'Sixteen',
        route: withLocal(`sixteen`),
        component: Sixteen,
      },
      {
        name: 'Seventeen',
        route: withLocal(`seventeen`),
        component: Seventeen,
      },
      {
        name: 'Eighteen',
        route: withLocal(`eighteen`),
        component: Eighteen,
      },
      {
        name: 'Nineteen',
        route: withLocal(`nineteen`),
        component: Nineteen,
      },
      {
        name: 'Twenty',
        route: withLocal('twenty'),
        component: Twenty,
      },
      {
        name: 'Twenty One',
        route: withLocal(`twenty-one`),
        component: TwentyOne,
      },
      {
        name: 'Twenty Two',
        route: withLocal(`twenty-two`),
        component: TwentyTwo,
      },
      {
        name: 'Twenty Three',
        route: withLocal(`twenty-three`),
        component: TwentyThree,
      },
      {
        name: 'Twenty Four',
        route: withLocal(`twenty-four`),
        component: TwentyFour,
      },
      {
        name: 'Twenty Five',
        route: withLocal(`twenty-five`),
        component: TwentyFive,
      },
      {
        name: 'Twenty Seven',
        route: withLocal(`twenty-seven`),
        component: TwentySeven,
      },
      {
        name: 'Twenty Eight',
        route: withLocal(`twenty-eight`),
        component: TwentyEight,
      },
    ]}
  />
)

export default Janurary2017
