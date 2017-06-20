import React, {
  Component,
} from 'react'
import PropTypes from 'prop-types'
import {
  NavLink,
} from 'react-router-dom'
import CSSModules from 'react-css-modules'
import {
  FaHandOUp,
  FaHandORight,
  FaHandODown,
  FaHandOLeft,
} from 'react-icons/lib/fa'

import styles from './index.scss'

const TabBarData = [
  {
    path: '/home',
    text: '首页',
    selectedTab: 'homeTab',
    component: <FaHandOUp />,
  }, {
    path: '/sort',
    text: '分类',
    selectedTab: 'sortTab',
    component: <FaHandORight />,
  }, {
    path: '/shopcart',
    text: '购物车',
    selectedTab: 'shopTab',
    component: <FaHandODown />,
  }, {
    path: '/personcenter',
    text: '个人中心',
    selectedTab: 'centerTab',
    component: <FaHandOLeft />,
  },
]

// const oddEvent = (match, location) => {
//   if (!match) {
//     return false
//   }
//     // console.log(location)
// }
@CSSModules(styles)
class TabBar extends Component {
  static propTypes = {
    currTab: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props)

    this.state = {
      // selectedTab: 'homeTab'
    }
  }

  // componentWillReceiveProps(nextProps) {
  //     console.log(nextProps)
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log(nextProps)
  //     return true
  // }
  render() {
    const {
      currTab,
    } = this.props

    return (
      <div className={styles.tabBar}>
        {
          TabBarData.map((item, index) => (
            <div className={styles.tabBarTab} key={index} >
              <NavLink
                to={item.path}
                activeClassName={item.selectedTab === currTab ? styles.tabBarTabActive : ""}
              >
                <p className={styles.tabBarTabIcon}>
                  {item.component}
                </p>
                {item.text}
              </NavLink>
            </div>
          ))
        }
      </div>
    )
  }
}

export default TabBar
