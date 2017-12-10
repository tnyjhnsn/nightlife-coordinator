const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case 'progress/PROGRESS': {
      return action.bool
    }
    default: return state
  }
}
