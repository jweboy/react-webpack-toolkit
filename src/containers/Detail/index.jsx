import React from 'react'
import {
  RouteTransition,
} from 'react-router-transition'

import transition from 'util/transition'

const {
  slideLeft,
} = transition
const Detail = () => (
  <RouteTransition
    pathname={location.pathname}
    {...slideLeft}
  >
    <div>
      内容页部分说啥
    </div>
  </RouteTransition>
)

export default Detail