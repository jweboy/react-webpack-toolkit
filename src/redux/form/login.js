import { createReducer } from '../utils'

const LOGIN = 'FORM/LOGIN_FORM'

const initialState = {
  username: '',
  password: '',
  token: '',
}

export const setLogin = loginForm => ({
  type: LOGIN,
  loginForm,
})

export default createReducer(initialState, {
  [LOGIN]: (state, { loginForm }) => ({
    ...state,
    ...loginForm,
  }),
})
