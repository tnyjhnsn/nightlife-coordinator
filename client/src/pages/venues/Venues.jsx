import React from 'react'
import { connect } from 'react-redux'

import { saveSession, toggleCheckin } from '../../actions/venues'
import SearchBox from '../common/SearchBox'
import LoginButton from '../common/LoginButton'
import Login from './Login'
import Welcome from './Welcome'
import YelpPromo from '../common/YelpPromo'

class Venues extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.getCheckin = this.getCheckin.bind(this)
    this.toggleCheckin = this.toggleCheckin.bind(this)
    this.getLabel = this.getLabel.bind(this)
    this.rotateNames = this.rotateNames.bind(this)
  }

  listVenues(venues, userName) {
    return venues.map((venue, i) => (
      <div key={i} className="venue">
        <div className="venue-list">
          {userName ? this.getCheckin(venue) : ''}
          <div className="mb-1">
            <a className="text-link font-normal" href={venue.url} target="_blank">{venue.name}</a>
          </div>
          <div className="mb-2">
            <span className={this.getRating(venue.rating)} />
            <span className="text-grey-dark font-light text-xs"> from {venue.review_count} reviews</span>
          </div>
          {this.formatPhoto(venue.photos[0])}
          {this.getReview(venue)}
        </div>
      </div>
    ))
  }

  formatPhoto(url) {
    const cssStyle = {
      backgroundImage: "url(" + url + ")"
    }
    if (url.indexOf('None') < 0) {
      return (
        <div className="venue-pic bg-cover bg-no-repeat bg-center bg-scroll"
          style={cssStyle} />
      )
    }
    return (<div className="venue-pic venue-pic-placeholder">
      <i className="fa fa-glass fa-2x text-grey-light" />
    </div>)
  }

  toggleCheckin = (venueId, checkinId) => (e) => {
    const { toggleCheckin } = this.props
    toggleCheckin(venueId, checkinId)
  }

  getCheckin(venue) {
    const { user } = this.props
    const hasCheckins = venue.hasOwnProperty('checkins') && venue.checkins.length > 0
    const className = 'btn-checkin ' + [
      `bg-${hasCheckins ? 'blue-electric' : 'white'}`,
      `text-${hasCheckins ? 'white' : 'blue-electric'}`
    ].join(' ')

    return (
      <div onClick={this.toggleCheckin(venue.id, user._id)} className={className}>
        <span>{hasCheckins ? this.getLabel(venue.checkins, user) : 'CHECKIN'}</span>
      </div>
    )
  }

  getLabel(checkins, user) {
    const index = checkins.map(checkin => checkin._id).indexOf(user._id)
    if (index > -1) {
      this.rotateNames(checkins, index)
    }
    const firstPerson = (checkins[0]._id === user._id) ? 'You' : checkins[0].name
    switch (checkins.length) {
      case 1: {
        return `${firstPerson} ${this.isAre(firstPerson)} going`
      }
      case 2: {
        return `${firstPerson} and ${checkins[1].name} are going`
      }
      case 3: {
        return `${firstPerson}, ${checkins[1].name}, and ${checkins[2].name} are going`
      }
      default:
        return `${firstPerson}, ${checkins[1].name}, and ${checkins.length - 2} others are going`
    }
  }

  isAre(firstPerson) {
    return firstPerson === 'You' ? 'are' : 'is'
  }

  rotateNames(checkins, n) {
    // TODO Maybe don't use prototype here ?
    const arr = Array
    arr.prototype.rotate = function (x) {
      this.unshift(...this.splice(x, this.length))
      return this
    }
    checkins.rotate(n)
    Reflect.deleteProperty(arr, 'rotate')
  }

  getReview(venues) {
    if (venues.review_count && venues.reviews) {
      return (
        <div>
          <p className="text-std">
            {venues.reviews[0].text}
            <a href={venues.reviews[0].url} target="_blank" > read more</a>
          </p>
        </div>
      )
    }
    return (
      <p className="text-std">No reviews for this venue</p>
    )
  }

  getRating(rating) {
    const stars = rating % 1 ? `${Math.floor(rating)}-half` : rating
    return [
      'inline-block',
      'star',
      `star-${stars}`,
      'mr-2'
    ].join(' ')
  }

  handleLoginClick() {
    const { saveSession, venues } = this.props
    saveSession(venues)
  }

  render() {
    const { loggingIn, user, venues, searchVenues } = this.props
    return (
      <div>
        <div className="heading bg-cover bg-no-repeat bg-center bg-scroll">
          <div className="flex w-full flex-col md:flex-row justify-center items-center">
            <div className="text-app-name">whereTo</div>
            <SearchBox searchVenues={searchVenues} />
            {!loggingIn && !user.name ? <LoginButton /> : ''}
            {user.name ? <Welcome name={user.name} /> : ''}
          </div>
        </div>
        {loggingIn ? <Login handleLoginClick={this.handleLoginClick} /> : ''}
        <YelpPromo />
        {this.listVenues(venues, user.name)}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  saveSession: (venues) => dispatch(saveSession(venues)),
  toggleCheckin: (venueId, checkinId) => dispatch(toggleCheckin(venueId, checkinId))
})

export default connect(null, mapDispatchToProps)(Venues)
