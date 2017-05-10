import React from 'react';
// import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import FaBeer from 'react-icons/lib/fa/beer';
// import {MdCancel, MdChat, MdCheck} from 'react-icons/md';
import {
    FaHandOUp,
    FaHandORight,
    FaHandODown,
    FaHandOLeft
} from 'react-icons/lib/fa';

import styles from './index.scss';

const TabBarData = [
    {
        id: 0,
        path: '/home',
        text: '首页',
        component: <FaHandOUp />
    }, {
        id: 1,
        path: '/sort',
        text: '分类',
        component: <FaHandORight />
    }, {
        id: 2,
        path: '/shopcard',
        text: '购物车',
        component: <FaHandODown />
    }, {
        id: 3,
        path: '/personcenter',
        text: '个人中心',
        component: <FaHandOLeft />
    }
];

const TabBar = () => (
    <div styleName="tab-bar-bar">
        {
            TabBarData.map((item) => {
                return (
                    <div styleName="tab-bar-tab" key={item.id}>
                        <Link to={item.path}>
                            <p styleName="tab-bar-tab-icon">
                                {item.component}
                            </p>
                            {item.text}
                        </Link>
                    </div>
                )
            })
        }
    </div>
)




// TabBar.propTypes = {
//     text: PropTypes.string.required
// }

export default CSSModules(TabBar, styles);