import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import CSSModules from 'react-css-modules'

import SliderItem from './SliderItem'
import styles from './index.scss'

@CSSModules(styles)
class Swipe extends Component {
  static defaultProps = {
    infinite: false,
    speed: 500,
    autoplay: true,
    lazyLoad: true,
  }
  static propTypes = {
    data: PropTypes.array.isRequired,
  }
  constructor() {
    super()

    this.state = {
      list: [],
      dots: true,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.data,
      dots: nextProps.dots,
    })
  }
  render() {
    const {
      list,
      dots,
    } = this.state

    return (
      <div>
        {
          list.length > 0 ?
            <Slider
              {...this.props}
              dots={dots}
            >
              {
                list.map(item => (
                  <div key={item.bid}>
                    {/* 包裹一层div fix Cannot read property 'getBoundingClientRect' of null */}
                    <SliderItem {...item} />
                  </div>
                ))
              }
            </Slider> :
            null
        }
      </div>
    )
  }
}

Swipe.propTypes = {
  dots: PropTypes.bool.isRequired,
}

export default Swipe