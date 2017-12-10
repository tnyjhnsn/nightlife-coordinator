import React from 'react'
import { connect } from 'react-redux'

import { getUser } from '../../actions/auth'
import { searchVenues, restoreSession } from '../../actions/venues'
import Venues from './Venues'

class VenuesContainer extends React.Component {
  componentWillMount() {
    const { restoreSession } = this.props
    restoreSession()
  }

  render() {
    const { auth: { loggingIn, user }, venues, searchVenues } = this.props
    return (
      <div>
        <Venues
          loggingIn={loggingIn}
          user={user}
          venues={venues}
          searchVenues={searchVenues}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  venues: state.venues,
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  searchVenues: query => dispatch(searchVenues(query)),
  getUser: userId => dispatch(getUser(userId)),
  restoreSession: () => dispatch(restoreSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(VenuesContainer)
