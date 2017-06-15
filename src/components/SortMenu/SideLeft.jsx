import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import styles from './index.scss'


@CSSModules(styles, {
  allowMultiple: true,
})
class SideLeft extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
    }
  }
  handleClick = (index) => {
    this.setState({
      currentIndex: index,
    })
  }
  render() {
    const {
      currentIndex,
    } = this.state

    return (
      <div styleName="sideLeft">
        <ul styleName="leftList">
          {
            Array(...(Array(15))).map((item, index) => (
              <li
                styleName={index === currentIndex ? "leftItem leftItemActive" : "leftItem"}
                key={index}
                onClick={this.handleClick.bind(this, index)}
              >
                <span>
                  推荐
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default SideLeft