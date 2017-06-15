import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import CSSModules from 'react-css-modules'
import {
  Link,
} from 'react-router-dom'

import testPic from 'assets/test.jpg'

import styles from './index.scss'
// import '../../../node_modules/slick-carousel/slick/slick.css'
// import '../../../node_modules/slick-carousel/slick/slick-theme.css'

@CSSModules(styles)
class Swipe extends Component {
  static defaultProps = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    lazyload: true,
  }
  static propTypes = {
    data: PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props)

    this.state = {
      list: [],
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.data,
    })
  }

  render() {
    const {
      list,
    } = this.state
    return (
      <div>
        {
          list.length > 0 ?
            <Slider {...this.props}>
              {
                list.map(item => (
                  <Link to="/detail" key={`banner_${item.bid}`}>
                    <img
                      src={item.url ? item.url : testPic}
                      styleName="item"
                    />
                  </Link>
                ))
              }
            </Slider> :
            null
        }
      </div>
    )
  }
}

export default Swipe