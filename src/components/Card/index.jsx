import React, {
  Component
} from 'react';
//http://gorangajic.github.io/react-icons/index.html
import FaBeer from 'react-icons/lib/fa/beer';
import MdAccessibility from 'react-icons/lib/md/accessibility';
import TiAdjustBrightness from 'react-icons/lib/ti/adjust-brightness';
import GoAlignmentAlignedTo from 'react-icons/lib/go/alignment-aligned-to';
import Md3dRotation from 'react-icons/lib/md/3d-rotation';
import {
  Link
} from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './index.scss';
import logo from 'assets/test.jpg';

import TabBar from 'components/TabBar';

@CSSModules(styles)
class Card extends Component {
  render() {
    return (
      <div styleName="item">
        <img src={logo} alt="" styleName="logo" />
        <div styleName="next"></div>
        <hr />
        <div>
          <Link to="/detail">
            跳转到详情页面
          </Link>
        </div>
        <hr />
        <p>css modules 测试部分</p>
        <div>
          <h4 styleName="title">test1</h4>
          <p styleName="description">这是一段描述内容</p>
        </div>
        <hr />
        <p>react css modules 测试部分</p>
        <h4 styleName="title">test1</h4>
        <p styleName="description">这是一段描述内容</p>
        <hr />
        <div styleName="next">&nbsp;</div>
        <span styleName="small-icon">
          <FaBeer />
          <MdAccessibility />
          <TiAdjustBrightness />
          <GoAlignmentAlignedTo />
          <Md3dRotation />
        </span>
        <ul styleName="flexible">
          <li styleName="subitem">flex1</li>
          <li styleName="subitem">flex2</li>
        </ul>
        <div styleName="normal-line"></div>
        <div styleName="line"></div>
        <div styleName="break"></div>
      </div>
    );
  }
}

export default Card;
