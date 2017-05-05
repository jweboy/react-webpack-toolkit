import React, {
    Component
} from 'react';
// import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';

import './index.css';

class TabBar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <ul className="tabbar">
                <li className="tabbar_item">
                    <Link to="/card">
                       card {/*{props}*/}
                    </Link>
                </li>
                <li className="tabbar_item">
                    <Link to="/list">
                        listsss  
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