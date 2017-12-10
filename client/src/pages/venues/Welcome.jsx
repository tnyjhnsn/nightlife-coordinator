import React from 'react'
import { connect } from 'react-redux'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name } = this.props
    return (
      <div className="text-xl font-light text-grey-x-light">Welcome, {name}</div>
    )
  }
}

export default connect()(Welcome)
