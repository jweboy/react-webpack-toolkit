import React, {
    Component
} from 'react';
import {
    Route
} from 'react-router-dom';
class SubRoute extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            route
        } = this.props;
        return (
            <Route
                path={route.path}
                render={() => (
                    <route.component />
                )}
            />
        );
    }
}

// TODO 需要换简洁的es6无状态组件

export default SubRoute;