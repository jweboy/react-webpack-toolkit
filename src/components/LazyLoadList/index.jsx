import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import CSSModules from 'react-css-modules';

import SubLazyLoadItem from './SubLazyLoadItem';
import LazyLoadPlaceHolder from './LazyLoadPlaceHoder';
import styles from './index.scss';

const uniqueId = () => (`${Math.random().toString(36)}00000000000000000`).slice(2, 10);

@CSSModules(styles)
class LazyLoadList extends Component {
  constructor() {
    super();

    this.state = {
      arr: Array(...Array(2)).map((item, index) => ({
        uniqueId: uniqueId(),
        once: [6, 7].indexOf(index) > -1,
      })),
    };
  }
  render() {
    const {
      arr,
    } = this.state;
    return (
      <div styleName="list">
        <div className="widget-list">
          {arr.map((item, index) => (
            <LazyLoad
              key={index}
              once={item.once}
              height={200}
              offset={[-200, 0]}
              debounce={200}
              placeholder={<LazyLoadPlaceHolder />}
            >
              <SubLazyLoadItem {...item} count={index + 1} />
            </LazyLoad>
          ))}
        </div>
      </div >
    );
  }
}

export default LazyLoadList;