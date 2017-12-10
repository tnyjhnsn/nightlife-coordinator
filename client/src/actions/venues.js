import axios from 'axios'
import { setProgress } from './progress'
import searchQuery from './search-query'

export const venuesSuccess = venues => ({ type: 'venues/VENUES_SUCCESS', venues })
export const checkinSuccess = checkins => ({ type: 'venues/CHECKIN_SUCCESS', checkins })

const api = () => {
  return axios.create({
    baseURL: '/venues'
  })
}

export const searchVenues = (searchText) => {
  const query = searchQuery(searchText)
  return async (dispatch) => {
    dispatch(setProgress(true))
    await api().post('/search', query)
      .then((response) => {
        dispatch(venuesSuccess(response.data))
      })
      .catch((error) => {
        console.log('PROPER CHECKS NEEDED')
      })
    dispatch(setProgress(false))
  }
}

export const saveSession = (venues) => {
  return async (dispatch) => {
    sessionStorage.setItem('nightlife_venues', JSON.stringify(venues))
  }
}

export const restoreSession = () => {
  return async (dispatch) => {
    const venues = JSON.parse(sessionStorage.getItem('nightlife_venues'))
    if (venues) {
      dispatch(venuesSuccess(venues))
      sessionStorage.removeItem('nightlife_venues')
    } else {
      // TODO ERROR CHECKING
      console.log('PROPER CHECKS NEEDED')
    }
  }
}

export const toggleCheckin = (venueId, checkinId) => {
  return async (dispatch) => {
    dispatch(setProgress(true))
    await api().put(`/${venueId}/${checkinId}`)
      .then((response) => {
        dispatch(checkinSuccess(response.data))
      })
      .catch((error) => {
        console.log('PROPER CHECKS NEEDED')
      })
    dispatch(setProgress(false))
  }
}
