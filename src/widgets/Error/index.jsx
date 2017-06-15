import React from 'react'
import PropTypes from 'prop-types'
import Redbox from 'redbox-react'

const ConsoleErrorReporter = ({ error }) => {
  console.error(`error:${error}`)
  return <Redbox error={error} />
}

ConsoleErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
}

export default ConsoleErrorReporter