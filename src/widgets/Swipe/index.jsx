import React, { Component, } from 'react';
import Slider from 'react-slick';
import CSSModules from 'react-css-modules';

import testPic from 'assets/test.jpg';

import styles from './index.scss';

@CSSModules(styles)
class Swipe extends Component {
  static defaultProps = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    lazyload: true,
  }
  render() {
    return (
      <div>
        <Slider {...this.props}>
          <img src={testPic} styleName="item" />
        </Slider>
      </div>
    );
  }
}

export default Swipe;