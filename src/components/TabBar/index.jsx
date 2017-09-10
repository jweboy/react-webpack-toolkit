import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation'
import PersonIcon from 'material-ui-icons/Person'
import SortIcon from 'material-ui-icons/Sort'
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart'
import HomeIcon from 'material-ui-icons/Home'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

@withRouter
@withStyles(styles)
class Navigation extends React.Component {
  state = {
    value: 'homeTab',
  };

  handleChange = (event, value) => {
    const url = `/${value.split('Tab')[0]}`;
    this.props.history.push(url);
    // this.setState({ value });
  };
  renderItem = ({ text, component, selectedTab }) => (
    <BottomNavigationButton
      value={selectedTab}
      key={text}
      label={text}
      icon={component}
      className={this.props.classes.item}
    />
  )
  render() {
    const { list, classes, currTab } = this.props

    return (
      <BottomNavigation
        value={currTab}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        {list.map(item => this.renderItem(item))}
      </BottomNavigation>
    );
  }
}

Navigation.defaultProps = {
  list: [
    {
      path: '/home',
      text: '首页',
      selectedTab: 'homeTab',
      component: <HomeIcon />,
    }, {
      path: '/sort',
      text: '分类',
      selectedTab: 'sortTab',
      component: <SortIcon />,
    }, {
      path: '/shop',
      text: '购物车',
      selectedTab: 'shopTab',
      component: <ShoppingCartIcon />,
    }, {
      path: '/center',
      text: '个人中心',
      selectedTab: 'centerTab',
      component: <PersonIcon />,
    },
  ],
}

Navigation.propTypes = {
  classes: PropTypes.object,
  list: PropTypes.array,
  history: PropTypes.object,
  currTab: PropTypes.string,
}

export default Navigation