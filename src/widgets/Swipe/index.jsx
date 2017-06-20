import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import CSSModules from 'react-css-modules'

import SliderItem from './SliderItem'
import styles from './index.scss'

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
  constructor() {
    super()

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

export default Swipe