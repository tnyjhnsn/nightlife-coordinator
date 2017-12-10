const initialState = {
  loggingIn: false,
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'auth/LOGGING_IN': {
      return Object.assign({}, state, {
        loggingIn: action.bool
      })
    }
    case 'auth/LOGGED_IN': {
      return Object.assign({}, state, {
        loggingIn: false,
        user: action.user
      })
    }
    default: return state
  }
}
