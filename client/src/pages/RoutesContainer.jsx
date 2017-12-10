import React from 'react'
import { connect } from 'react-redux'

import Routes from './Routes'

const RoutesContainer = ({ progress }) => {
  return (
    <Routes progress={progress} />
  )
}

const mapStateToProps = state => ({
  progress: state.progress
})

export default connect(mapStateToProps)(RoutesContainer)
