import React from 'react';
import classNames from 'classnames';

import styles from './index.scss';

const Loading = () => (
  <div className={styles.doubleBounce}>
    <div className={classNames({
      [`${styles.child}`]: true,
    })} />
    <div className={
      classNames({
        [`${styles.child}`]: true,
        [`${styles.bounceItem}`]: true,
      })
    } />
  </div>
);

export default Loading;