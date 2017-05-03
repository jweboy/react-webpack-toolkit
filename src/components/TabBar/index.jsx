import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';

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
                    home
                </li>
                <li className="tabbar_item">
                    my
                </li>
            </ul>
        );
    }
}

// TabBar.propTypes = {
//     text: PropTypes.string.required
// }

export default TabBar;