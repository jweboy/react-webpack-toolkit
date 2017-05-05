import React from 'react';
//http://gorangajic.github.io/react-icons/index.html
import FaBeer from 'react-icons/lib/fa/beer';
import MdAccessibility from 'react-icons/lib/md/accessibility';
import TiAdjustBrightness from 'react-icons/lib/ti/adjust-brightness';
import GoAlignmentAlignedTo from 'react-icons/lib/go/alignment-aligned-to';
import Md3dRotation from 'react-icons/lib/md/3d-rotation';
import {
  Link
} from 'react-router-dom';

import styles from './index.scss';
import 'assets/styles/iconfont.scss';
import logo from 'assets/imgs/test.jpg';

import TabBar from 'components/TabBar';

function Card() {
  return (
    <div className="item">
        {/*<img src={logo} alt=""/>
        <span>sad</span>*/}
        <hr />
        <div>
          <Link to="/detail">
            跳转到详情页面
          </Link>
        </div>
        <hr />
        <p>css modules 测试部分</p>
        <div>
          <h4 className={styles.title}>test1</h4>
          <p className={styles.description}>这是一段描述内容</p>
        </div>
        <div className="next">&nbsp;</div>
        <span className="small-icon">
          <FaBeer />
          <MdAccessibility />
          <TiAdjustBrightness />
          <GoAlignmentAlignedTo />
          <Md3dRotation />
        </span>
        {/*<div className="icon2">
            <i className="iconfont icon-gouwuchetianjia">&nbsp;</i>
            <i className="iconfont icon-gouwuche">&nbsp;</i>
            <i className="iconfont icon-erweima">&nbsp;</i>
        </div>*/}
        <div className="f-layout">
          <span>flexflexoneoneone</span>
          <span>flexsss2a</span>
          <span>flex3.</span>
        </div>
        <TabBar />
    </div>
  );
}
export default Card;
