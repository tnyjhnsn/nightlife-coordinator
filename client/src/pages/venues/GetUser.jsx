import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { getUser } from '../../actions/auth'

class User extends React.Component {
  componentWillMount() {
    const { getUser, match } = this.props
    getUser(match.params.userId)
  }

  render() {
    return (
      <Redirect to="/venues" />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: userId => dispatch(getUser(userId))
})

export default connect(null, mapDispatchToProps)(User)
