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
        text: '主页'
    }, {
        id: 1,
        path: '/list',
        text: '个人中心'
    }
];

const TabBar = () => (
    <ul styleName="tabbar">
        {
            TabBarData.map((item) => {
                return (
                    <li styleName="item" key={item.id}>
                        <Link to={item.path}>
                            {item.text}
                        </Link>
                    </li>
                )
            })
        }
    </ul>
)


// TabBar.propTypes = {
//     text: PropTypes.string.required
// }

export default CSSModules(TabBar, styles);