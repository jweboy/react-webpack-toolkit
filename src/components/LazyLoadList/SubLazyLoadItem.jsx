import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

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
      //renderCount,
    } = this.state;
    const {
      // once,
      mapIndex,
      uniqueId,
    } = this.props;

    console.log(mapIndex);

    return isReady ? (
      <li styleName={mapIndex % 2 !== 0 ? "goods__singular" : "goods__even"}>
        <div styleName="goods__wrapper">
          <div styleName="goods__itemHeader" id={uniqueId} >
            <img styleName="goods__itemLogo" src={goodsPic} alt="" />
          </div>
        </div>
        {/* <div styleName="item">
          <span styleName="count">{count}</span>
          {
            once ? (
              <div styleName="once">
                SubLazyLoadItem once
              </div>
            ) : (
                <div>
                  SubLazyLoadItem
              </div>
              )
          }
          <p styleName="render_count">render次数:{renderCount}</p>
          <p>props from parent:{uniqueId}</p>
        </div>*/}
      </li>
    ) : (
        <div styleName="item">
          loading
      </div>
      );
  }
}

SubLazyLoadItem.propTypes = {
  uniqueId: PropTypes.string.isRequired,
  once: PropTypes.bool.isRequired,
  mapIndex: PropTypes.number.isRequired,
};

export default SubLazyLoadItem;