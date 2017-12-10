import axios from 'axios'
import { setProgress } from './progress'

export const loggingIn = (bool) => ({ type: 'auth/LOGGING_IN', bool })
export const loggedIn = (user) => ({ type: 'auth/LOGGED_IN', user })

const api = () => {
  return axios.create({
    baseURL: '/auth'
  })
}

export const getUser = (userId) => {
  return async (dispatch) => {
    dispatch(setProgress(true))
    await api().get(`/user/${userId}`)
      .then((response) => {
        dispatch(loggedIn(response.data.user))
      })
      .catch((error) => {
        console.log('inside error')
      })
    dispatch(setProgress(false))
  }
}
