import React from 'react'
import Post from '../../../../components/post-container.js'

import ViewOfGoldBeachImg from './summer-2018-trip/view-of-gold-beach.jpg'
import DiabloLakeImg from './summer-2018-trip/diablo-lake.jpg'
import ParentsImg from './summer-2018-trip/parents.jpg'
import MomImg from './summer-2018-trip/mom.jpg'
import DadImg from './summer-2018-trip/dad.jpg'
import ViewFromDiabloDamImg from './summer-2018-trip/view-from-diablo-dam.jpg'
import LibertyBellMountainImg from './summer-2018-trip/liberty-bell-mountain.jpg'
import GuacamoleAndChipsImg from './summer-2018-trip/guacamole-and-chips.gif'
import BrooksMemorialImg from './summer-2018-trip/brooks-memorial.jpg'

export default props => (
  <Post date="07/18/2018">
    <div>
      <h1>Summer 2018 Vacation</h1>
      <p />
      <img src={ViewFromDiabloDamImg} />
      <img src={ParentsImg} />
    </div>
  </Post>
)
