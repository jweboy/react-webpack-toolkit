import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import fetchRequest from 'util/fetch'
import sort from '../../actions/sort'
import styles from './index.scss'

@CSSModules(styles, {
  allowMultiple: true,
})
class SideLeft extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      data: [],
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
    })
  }

  handleClick = (index) => {
    const {
      dispatch,
    } = this.props
    this.setState({
      currentIndex: index,
    })

    dispatch(sort(index))
  }
  render() {
    const {
      currentIndex,
      data,
    } = this.state

    return (
      <div styleName="sideLeft">
        <ul styleName="leftList">
          {
            data.map((item, index) => (
              <li
                styleName={index === currentIndex ? "leftItem leftItemActive" : "leftItem"}
                key={item.id}
                onClick={this.handleClick.bind(this, index)}
              >
                <span>{item.name}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

SideLeft.propTypes = {
  data: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
}

export default connect()(SideLeft)