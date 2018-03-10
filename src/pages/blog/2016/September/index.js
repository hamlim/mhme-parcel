import React from 'react'
import BlogListing from '../../../../components/blog-listing'
import AspectRatio from './aspect-ratio'
import GithubIsAPain from './github-is-a-pain'
import GoogleEventPredictions from './google-event-predictions'
import GoogleEventUpdates from './google-event-update'
import GoProKarma from './gopro-karma'
import Hyperterm from './hyperterm'
import DatabaseAPI from './rfp-database-api'
import September from './september'
import Sick from './sick'
import WeekendProjects1 from './weekend-projects-1'
import WeekendProjects2 from './weekend-projects-2'
import WeekendProjects3 from './weekend-projects-3'
import WeeklyRecap1 from './weekly-recap-1'
import WeeklyRecap2 from './weekly-recap-2'
import WeeklyRecap3 from './weekly-recap-3'
import WeeklyRecap4 from './weekly-recap-4'
import Youtube from './youtube-is-for-advertisers'

const local = '/blog/2016/September/'

const withLocal = r => `${local}${r}`

const September2016 = () => (
  <BlogListing
    title={<h3>September 2016</h3>}
    path="/blog/2016/September"
    routes={[
      {
        name: 'Aspect Ratio',
        route: withLocal(`aspect-ratio`),
        component: AspectRatio,
      },
      {
        name: 'Github is a Pain',
        route: withLocal(`github-is-a-pain`),
        component: GithubIsAPain,
      },
      {
        name: 'Google Event Predictions',
        route: withLocal(`google-event-predictions`),
        component: GoogleEventPredictions,
      },
      {
        name: 'Google Event Update',
        route: withLocal(`google-event-update`),
        component: GoogleEventUpdates,
      },
      {
        name: 'GoPro Karma',
        route: withLocal(`gopro-karma`),
        component: GoProKarma,
      },
      {
        name: 'Hyperterm',
        route: withLocal(`hyperterm`),
        component: Hyperterm,
      },
      {
        name: 'Request For Product: Database API',
        route: withLocal(`rfp-database-api`),
        component: DatabaseAPI,
      },
      {
        name: 'September',
        route: withLocal(`september`),
        component: September,
      },
      {
        name: 'Sick',
        route: withLocal(`sick`),
        component: Sick,
      },
      {
        name: 'Weekend Projects vol. 1',
        route: withLocal(`weekend-projects-1`),
        component: WeekendProjects1,
      },
      {
        name: 'Weekend Projects vol. 2',
        route: withLocal(`weekend-projects-2`),
        component: WeekendProjects2,
      },
      {
        name: 'Weekend Projects vol. 3',
        route: withLocal(`weekend-projects-3`),
        component: WeekendProjects3,
      },
      {
        name: 'Weekly Recap vol. 1',
        route: withLocal(`weekly-recap-1`),
        component: WeeklyRecap1,
      },
      {
        name: 'Weekly Recap vol. 2',
        route: withLocal(`weekly-recap-2`),
        component: WeeklyRecap2,
      },
      {
        name: 'Weekly Recap vol. 3',
        route: withLocal(`weekly-recap-3`),
        component: WeeklyRecap3,
      },
      {
        name: 'Weekly Recap vol. 4',
        route: withLocal(`weekly-recap-4`),
        component: WeeklyRecap4,
      },
      {
        name: 'Youtube Is For Advertisers',
        route: withLocal(`youtube-is-for-advertisers`),
        component: Youtube,
      },
    ]}
  />
)

export default September2016
