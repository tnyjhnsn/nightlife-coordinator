import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { searchVenues } from '../../actions/venues'
import Landing from './Landing'

const LandingContainer = ({ auth: { loggingIn }, venues, searchVenues }) => {
  if (loggingIn || venues.length) {
    return <Redirect to="/venues" />
  }
  return (
    <Landing searchVenues={searchVenues} />
  )
}

const mapStateToProps = state => ({
  venues: state.venues,
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  searchVenues: query => dispatch(searchVenues(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
