import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'

import combinedReducers from '../reducers'

const loggerMiddleware = createLogger()

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

export default (initialState) => {
  return createStore(combinedReducers, initialState, enhancer)
}
