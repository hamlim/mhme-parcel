import React from 'react'
import { Link } from 'react-router-dom'

import Yaml from '../components/yaml.js'

export default {
  overrides: {
    Link: {
      component: Link,
    },
    Yaml: {
      component: Yaml,
    },
  },
}
