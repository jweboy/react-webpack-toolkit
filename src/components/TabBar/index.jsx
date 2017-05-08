import React from 'react';
// import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './index.scss';

const TabBarData = [
    {
        id: 0,
        path: '/card',
        text: '首页'
    }, {
        id: 1,
        path: '/list',
        text: '分类'
    }, {
        id: 2,
        path: '/shopcard',
        text: '购物车'
    }, {
        id: 3,
        path: '/center',
        text: '个人中心'
    }
];

const TabBar = () => (
    <div styleName="tabbar">
        <footer>
            {
                TabBarData.map((item) => {
                    return (
                        <Link to={item.path} styleName="item" key={item.id}>
                            {item.text}
                        </Link>
                    )
                })
            }
        </footer>
    </div>
)


// TabBar.propTypes = {
//     text: PropTypes.string.required
// }

export default CSSModules(TabBar, styles);