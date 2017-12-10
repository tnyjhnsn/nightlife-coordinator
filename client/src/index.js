import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'font-awesome/css/font-awesome.min.css'
import './css/index.css'

import RoutesContainer from './pages/RoutesContainer'
import configureStore from './store'

const store = configureStore()

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.querySelector('#react-app'),
  )
}

renderApp(RoutesContainer)
