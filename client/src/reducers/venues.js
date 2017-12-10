const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'venues/VENUES_SUCCESS': {
      return [...action.venues]
    }
    case 'venues/CHECKIN_SUCCESS': {
      const index = state.map(venue => venue.id).indexOf(action.checkins.venueId)
      return [
        ...state.slice(0, index),
        { ...state[index], checkins: action.checkins.checkins },
        ...state.slice(index + 1)
      ]
    }
    default: {
      return state
    }
  }
}
