import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import {
  Link,
} from 'react-router-dom';

import goodsPic from 'assets/goods.png';

import styles from './index.scss';


@CSSModules(styles)
class SubLazyLoadItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: true,
      renderCount: 1,
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const {
      uniqueId,
    } = this.props;
    const {
      renderCount,
    } = this.state;

    if (nextProps.uniqueId !== uniqueId && uniqueId) {
      this.setState({
        isReady: false,
      });

      setTimeout(() => {
        this.setState({
          isReady: true,
          renderCount: renderCount + 1,
        });
      }, 3000);
    } else {
      this.setState({
        isReady: true,
      });
    }
  }

  render() {
    const {
      isReady,
      // renderCount,
    } = this.state;
    const {
      // once,
      mapIndex,
      uniqueId,
    } = this.props;

    console.log(isReady);

    return (
      <li styleName={mapIndex % 2 !== 0 ? "goods__singular" : "goods__even"}>
        <Link to="/detail">
          <div styleName="goods__wrapper">
            <div styleName="goods__itemHeader" id={uniqueId} >
              <img styleName="goods__itemLogo" src={goodsPic} alt="" />
            </div>
            <div styleName="goods__desc" >日系纯色，面料轻柔舒透</div>
            <div styleName="goods__tagWraper">
              <span styleName="goods__tag">毕业季特惠</span>
            </div>
            <h5 styleName="goods___title">全棉针织纯色四件套</h5>
            <div styleName="goods__price">
              <span>¥</span>
              <span>399</span>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

SubLazyLoadItem.propTypes = {
  uniqueId: PropTypes.string.isRequired,
  once: PropTypes.bool.isRequired,
  mapIndex: PropTypes.number.isRequired,
};

export default SubLazyLoadItem;