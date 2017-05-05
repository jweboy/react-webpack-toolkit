import React, {
    Component
} from 'react';
// import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';

import styles from './index.scss';

class TabBar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <ul className={styles.tabbar}>
                <li className={styles.tabbar_item}>
                    <Link to="/card">
                       主页 {/*{props}*/}
                    </Link>
                </li>
                <li className={styles.tabbar_item}>
                    <Link to="/list">
                        个人中心 
                    </Link>
                </li>
            </ul>
        );
    }
}

// TabBar.propTypes = {
//     text: PropTypes.string.required
// }

export default TabBar;