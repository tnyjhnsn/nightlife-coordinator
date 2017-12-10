import React from 'react'

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.submit = this.submit.bind(this)
    this.state = {
      searchText: ''
    }
  }

  handleInputChange(event) {
    this.setState({ searchText: event.target.value })
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      target.preventDefault()
      this.submit()
    }
  }

  submit() {
    const { searchVenues } = this.props
    searchVenues(this.state.searchText)
  }

  render() {
    return (
      <form className="items-center max-w-lg m-2">
        <input
          className="input-search-box"
          id="location-search"
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Location search..."
          type="text"
          value={this.state.search} />
        <button
          className="btn-search-box"
          type="button" onClick={this.submit}>
          <i className="fa fa-search text-white" />
        </button>
      </form>
    )
  }
}

export default SearchBox
