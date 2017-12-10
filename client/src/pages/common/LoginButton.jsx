import React from 'react'
import { connect } from 'react-redux'
import { loggingIn } from '../../actions/auth'

class LoginButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { dispatch } = this.props
    dispatch(loggingIn(true))
  }

  render() {
    return (
      <button
        className="btn-login"
        type="button"
        onClick={this.handleClick}>
        LOGIN
      </button>
    )
  }
}

export default connect()(LoginButton)
