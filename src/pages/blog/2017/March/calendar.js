import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + '/Calendar.md',
  { encoding: 'utf-8' },
)

const Calendar = () => <Post source={md} />
export default Calendar
