import { combineReducers } from 'redux'

import progress from './progress'
import auth from './auth'
import venues from './venues'

const reducers = {
  progress,
  auth,
  venues
}

export default combineReducers(reducers)
