import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

// import loading from 'assets/loading.gif';
import Loading from 'widgets/Loading';

import styles from './index.scss';

@CSSModules(styles)
class LazyLoadPlaceholder extends Component {
  render() {
    const {
      // once,
      mapIndex,
    } = this.props;
    return (
      <li styleName={mapIndex % 2 !== 0 ? "goods__singular" : "goods__even"}>
        <div styleName="goods__wrapper">
          <div styleName="goods__itemHeader" >
            {/* <img styleName="goods__itemLogo" src={loading} alt="" />*/}
            <div>
              <Loading />
            </div>
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
      </li>
    );
  }
}

export default LazyLoadPlaceholder;